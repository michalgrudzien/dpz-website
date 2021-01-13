import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";

import { CardSidePadding } from "components/shared/Card";
import FeaturedPost from "components/shared/FeaturedPost";

import colors from "utils/colors";
import PostCard from "components/shared/PostCard";
import LinkButton from "components/shared/LinkButton";
import { graphql, useStaticQuery } from "gatsby";
import { getHomepageSingleNode } from "helpers/nodeExtractors";
import SanityBlockContent from "@sanity/block-content-to-react";

const StyledSection = styled.section`
  padding: 3em 0 3em;

  ${media.md`
  padding: 5em 0 3em;
  `}
`;

const Heading = styled.h1`
  color: ${colors.primary};
`;

const ButtonWrapper = styled.div`
  margin: 2em auto;
  text-align: center;
`;

const Blog = () => {
  const response = useStaticQuery(graphql`
    query BlogTeaserQuery {
      allSanityHomepage {
        nodes {
          content {
            _rawBlogBody
          }
        }
      }
      allSanityPost(sort: { fields: publishedAt, order: DESC }, limit: 4) {
        nodes {
          title
          excerpt
          publishedAt
          slug {
            current
          }
          category {
            slug {
              current
            }
            title
          }
          mainImage {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const data = getHomepageSingleNode(response);

  const {
    allSanityPost: { nodes: posts },
  } = response;

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col lg="6">
            <CardSidePadding>
              <Heading>Blog</Heading>
              <SanityBlockContent blocks={data._rawBlogBody} />
            </CardSidePadding>
          </Col>
        </Row>
        <Row>
          <Col hiddenLgDown>
            <FeaturedPost post={posts[0]} />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md="6" hiddenLgUp>
              <PostCard post={posts[0]} />
            </Col>
            <Col md="6" lg="4">
              <PostCard post={posts[1]} />
            </Col>
            <Col md="6" lg="4" hiddenXsDown>
              <PostCard post={posts[2]} />
            </Col>
            <Col md="6" lg="4" hiddenXsDown>
              <PostCard post={posts[3]} />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <ButtonWrapper>
              <LinkButton internal to="/blog">
                Przeglądaj bloga
              </LinkButton>
            </ButtonWrapper>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Blog;
