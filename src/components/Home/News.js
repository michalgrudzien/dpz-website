import React from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { graphql, useStaticQuery } from "gatsby";

import { CardSidePadding } from "components/shared/Card";
import FeaturedPost from "components/shared/FeaturedPost";

import colors from "utils/colors";
import PostCard from "components/shared/PostCard";
import LinkButton from "components/shared/LinkButton";

const StyledSection = styled.section`
  padding: 3em 0 3em;

  ${media.md`
  padding: 5em 0 3em;
  `}
`;

const Heading = styled.h1`
  color: ${colors.primary};

  ${media.md`
    margin-bottom: 1em;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 2em auto;
  text-align: center;
`;

const News = () => {
  const response = useStaticQuery(graphql`
    query NewsHomeQuery {
      allSanityPost(
        sort: { fields: publishedAt, order: DESC }
        limit: 4
        filter: { category: { slug: { current: { eq: "aktualnosci" } } } }
      ) {
        nodes {
          title
          excerpt
          publishedAt(formatString: "DD.MM.YYYY")
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

  const {
    allSanityPost: { nodes: posts },
  } = response;

  return (
    <StyledSection>
      <Container>
        <Row>
          <Col>
            <CardSidePadding>
              <Heading>Co słychać w klubie?</Heading>
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
              <LinkButton internal to="/blog/aktualnosci">
                Więcej aktualności
              </LinkButton>
            </ButtonWrapper>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default News;
