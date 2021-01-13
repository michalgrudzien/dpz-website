import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Col, Container, Row, media } from "styled-bootstrap-grid";
import BlockContent from "@sanity/block-content-to-react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

import PageLayout from "components/PageLayout";
import { CategoriesMenu, Heading } from "components/Blog";
import Card from "components/shared/Card";

import colors from "utils/colors";
import { boxShadow, portableTextStyles } from "utils/styles";
import get from "lodash.get";
import PostCard from "components/shared/PostCard";

const Wrapper = styled.div`
  padding: 8em 0;
`;

const PostContentWrapper = styled.div`
  padding: 3em 0 1em;
  ${portableTextStyles};
`;

const ImageWrapper = styled.div`
  margin: 1em 0;
`;

const MainImg = styled(Img)`
  position: relative;
  z-index: 50;
  top: 2em;
  border-radius: 0 0 2em 2em;
`;

const Date = styled.span`
  display: block;
  padding: 1.5em 0;
  font-weight: 500;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1em;
`;

const StyledCard = styled(Card)`
  padding-bottom: 0;
`;

const AuthorInfoWrapper = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 1em;
  align-items: center;
  text-align: right;
`;

const AuthorName = styled.span`
  display: inline-block;
  margin-bottom: 0.25em;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5em;
  color: ${colors.turquoise};
`;

const AuthorBio = styled.span`
  display: inline-block;
  font-size: 0.85em;
`;

const AuthorAvatarImg = styled(Img)`
  width: 100%;
  border-radius: 50%;
  ${boxShadow}
`;

const RelatedPostsTitle = styled.h3`
  margin: 2em 0 0;
`;

const RelatedPostsWrapper = styled.div`
  display: grid;
  width: 100%;

  ${media.sm`
    grid-template-columns: 50% 50%;
    grid-gap: 1em;
    margin-left: -0.5em;
  `}
`;

const StyledCategoriesMenu = styled(CategoriesMenu)`
  margin-top: 2em;
`;

const serializers = {
  types: {
    inlineImage: ({ node, options }) => {
      const { projectId, dataset } = options;
      const fluid = getFluidGatsbyImage(
        get(node, "asset._ref"),
        { maxWidth: 1024 },
        {
          projectId,
          dataset,
        }
      );

      return (
        <ImageWrapper>
          <Img fluid={fluid} />
        </ImageWrapper>
      );
    },
  },
};

const BlogPost = ({ data: { sanityPost: post, placeholderImage } }) => {
  console.log(post);
  return (
    <PageLayout colorTheme="dark">
      <Wrapper>
        <Container>
          <Row>
            <Col lg="10" lgOffset="1">
              <StyledHeading
                title={post.title}
                subtitle={
                  <span>
                    <Link to="/blog">Blog</Link> /{" "}
                    <Link to={`/blog/${post.category.slug.current}`}>
                      {post.category.title}
                    </Link>
                  </span>
                }
                date={post.publishedAt}
              />
            </Col>
            <Col lg="10" lgOffset="1">
              <Col>
                <p>{post.excerpt}</p>
              </Col>
            </Col>
            <Col lg="10" lgOffset="1">
              <MainImg
                fluid={get(
                  post,
                  "mainImage.asset.fluid",
                  placeholderImage.childImageSharp.fluid
                )}
                alt={`Blog DPŻ: ${post.title}`}
              />
            </Col>
            <Col lg="10" lgOffset="1">
              <StyledCard>
                {post.publishedAt && (
                  <Date>Data publikacji: {post.publishedAt}</Date>
                )}
                <PostContentWrapper>
                  <BlockContent
                    projectId="850bz552"
                    dataset="production"
                    blocks={post._rawBody}
                    imageOptions={{ w: 920, fit: "max" }}
                    serializers={serializers}
                  />
                </PostContentWrapper>
                <Col sm="8" md="7" smOffset="4" mdOffset="5">
                  <AuthorInfoWrapper>
                    <div>
                      <AuthorName>{post.author.name}</AuthorName>
                      <AuthorBio>{post.author.bio}</AuthorBio>
                    </div>
                    <AuthorAvatarImg
                      fluid={post.author.image.asset.fluid}
                      alt={post.author.name}
                    />
                  </AuthorInfoWrapper>
                </Col>
              </StyledCard>
            </Col>
          </Row>
          <Row>
            <Col lg="10" lgOffset="1">
              <RelatedPostsTitle>
                Nie żałuj sobie, przeczytaj coś jeszcze:
              </RelatedPostsTitle>
              <RelatedPostsWrapper>
                {post.relatedPosts.map(post => (
                  <PostCard post={post} />
                ))}
              </RelatedPostsWrapper>
            </Col>
          </Row>
        </Container>
        <StyledCategoriesMenu />
      </Wrapper>
    </PageLayout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    placeholderImage: file(relativePath: { eq: "blog_placeholder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityPost(id: { eq: $id }) {
      id
      _rawBody
      title
      excerpt
      mainImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      category {
        title
        slug {
          current
        }
      }
      publishedAt(formatString: "DD.MM.YYYY")
      author {
        bio
        name
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
      relatedPosts {
        title
        publishedAt(formatString: "DD.MM.YYYY")
        excerpt
        category {
          title
          slug {
            current
          }
        }
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        category {
          slug {
            current
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
