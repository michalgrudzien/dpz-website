import React from "react";
import styled from "styled-components";
import { Container, media } from "styled-bootstrap-grid";

import PageLayout from "components/PageLayout";
import { CategoriesMenu, Heading } from "components/Blog";

import FeaturedPost from "components/shared/FeaturedPost";
import PostCard from "components/shared/PostCard";

const Wrapper = styled.div`
  padding: 8em 0;
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
      <Heading title="Blog" subtitle="Wszystkie posty" />
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
