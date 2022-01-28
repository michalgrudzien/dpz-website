import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { Col, Container, Row, media } from "styled-bootstrap-grid";
import get from "lodash.get";

import PageLayout from "components/PageLayout";
import { CategoriesMenu, Heading } from "components/Blog";
import Card from "components/shared/Card";
import PostCard from "components/shared/PostCard";
import BlockContent from "components/BlockContent";

import colors from "utils/colors";
import { boxShadow } from "utils/styles";
import LinkButton from "components/shared/LinkButton";
import getFirstPostCategory from "helpers/getFirstPostCategory"

const Wrapper = styled.div`
  padding: 8em 0;
`;

const PostContentWrapper = styled.div`
  padding: 3em 0 1em;
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

const NewsButtonWrapper = styled.div`
  display: flex;
  margin: 3em 0 1em;
  justify-content: center;
`;

const BlogPost = ({ data: { sanityPost: post, placeholderImage, site } }) => (
  <PageLayout
    colorTheme="dark"
    seoProps={{
      title: `${post.title} - Blog`,
      description: post.excerpt,
      image: get(
        post,
        "mainImage.asset.fixed.src",
        `${site.siteMetadata.siteUrl}${placeholderImage.childImageSharp.fixed.src}`
      ),
    }}
  >
    <Wrapper>
      <Container>
        <Row>
          <Col lg="10" lgOffset="1">
            <StyledHeading
              title={post.title}
              subtitle={
                <span>
                  <Link to="/blog">Blog</Link> /{" "}
                  <Link to={`/blog/${getFirstPostCategory(post).slug.current}`}>
                    {getFirstPostCategory(post).title}
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
                  blocks={post._rawBody}
                  imageOptions={{ w: 920, fit: "max" }}
                />
              </PostContentWrapper>
              {post.author && (
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
              )}
            </StyledCard>
          </Col>
        </Row>
        {post.relatedPosts.length > 0 && (
          <Row>
            <Col lg="10" lgOffset="1">
              <RelatedPostsTitle>
                Nie żałuj sobie, przeczytaj coś jeszcze:
              </RelatedPostsTitle>
              <RelatedPostsWrapper>
                {post.relatedPosts.map((post) => (
                  <PostCard post={post} />
                ))}
              </RelatedPostsWrapper>
            </Col>
          </Row>
        )}
      </Container>
      <>
        {getFirstPostCategory(post).slug.current === "aktualnosci" ? (
          <NewsButtonWrapper>
            <LinkButton internal to="/blog/aktualnosci/1">
              Więcej aktualności
            </LinkButton>
          </NewsButtonWrapper>
        ) : (
          <StyledCategoriesMenu />
        )}
      </>
    </Wrapper>
  </PageLayout>
);

export default BlogPost;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    placeholderImage: file(relativePath: { eq: "blog_placeholder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
        fixed(width: 1200, height: 630) {
          src
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
          fixed(width: 1200, height: 630) {
            src
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
              ...GatsbySanityImageFluid
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
