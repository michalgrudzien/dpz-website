import React from "react";
import styled from "styled-components";
import { Col, Container, Row, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import CategoriesMenu from "components/Blog";

import colors from "utils/colors";
import FeaturedPost from "components/shared/FeaturedPost";
import PostCard from "components/shared/PostCard";

const Wrapper = styled.div`
  padding: 8em 0;
`;

const Heading = styled.h1`
  color: ${colors.primary};
  font-size: 4em;
  margin: 0.5em 0 0;
`;

const Subheading = styled.h2`
  margin-top: 0;
  color: ${colors.secondary};
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 2em;

  ${media.sm`
    grid-template-columns: repeat(2, auto);
  `}

  ${media.lg`
        grid-template-columns: repeat(3, auto);
    `}
`;

const categories = [
  {
    label: "Wszystkie posty",
    url: "/blog/wszystkie-posty",
  },
  {
    label: "Felietony",
    url: "/blog/felietony",
  },
  {
    label: "Jak zorganizowac rejs?",
    url: "/blog/jak-zorganizowac-rejs",
  },
  {
    label: "Dla nowicjuszy",
    url: "/blog/dla-nowicjuszy",
  },
  {
    label: "Piekielny kambuz",
    url: "/blog/piekielny-kambuz",
  },
];

const Blog = () => (
  <PageLayout colorTheme="dark">
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Heading>Blog</Heading>
            <Subheading>Wszystkie posty</Subheading>
          </Col>
        </Row>
      </Container>
      <CategoriesMenu categories={categories} />
      <FeaturedPost />
      <Container>
        <CardsWrapper>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </CardsWrapper>
      </Container>
    </Wrapper>
    <CategoriesMenu categories={categories} />
  </PageLayout>
);

export default Blog;
