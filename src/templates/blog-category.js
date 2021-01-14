import React from "react";
import styled from "styled-components";
import { Container, media } from "styled-bootstrap-grid";
import { graphql } from "gatsby";

import PageLayout from "components/PageLayout";
import { CategoriesMenu, Heading } from "components/Blog";

import FeaturedPost from "components/shared/FeaturedPost";
import PostCard from "components/shared/PostCard";
import get from "lodash.get";

import noPostsIconImg from "assets/images/no_posts_icon.svg";
import LinkButton from "components/shared/LinkButton";

const Wrapper = styled.div`
  padding: 8em 0;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 2em;

  ${media.sm`
    grid-template-columns: repeat(2, 50%);
  `}

  ${({ hasFeaturedPost }) =>
    hasFeaturedPost && media.lg`grid-template-columns: repeat(3, 33%);`}
`;

const NoPostsWrapper = styled.div`
  text-align: center;
  margin: 2em 0;
`;

const NoPostsImg = styled.img`
  width: 140px;
`;

const NoPostsHeading = styled.h2`
  margin-bottom: 0.25em;
`;

const PaginationWrapper = styled.div`
  padding: 2em 0;

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  width: fit-content;

  margin: 0 auto;
`;

const CommonPageWrapper = ({ category, children }) => (
  <PageLayout colorTheme="dark">
    <Wrapper>
      <Heading title="Blog" subtitle={category.title} />
      {children}
      <CategoriesMenu />
    </Wrapper>
  </PageLayout>
);

const BlogCategory = ({ data, pageContext }) => {
  const posts = get(data, "allSanityPost.nodes", []);
  const { pageNumber, pagesCount, category } = pageContext;

  const hasNextPage = pageNumber < pagesCount;
  const hasPreviousPage = pageNumber > 1;
  const hasPagination = hasNextPage || hasPreviousPage;

  if (posts.length === 0)
    return (
      <CommonPageWrapper category={category}>
        <NoPostsWrapper>
          <NoPostsImg src={noPostsIconImg} alt="Brak postów" />
          <NoPostsHeading>Nie ma postów w tej kategorii...</NoPostsHeading>
          <p>ale nie smuć się! W innych na pewno coś się znajdzie:</p>
        </NoPostsWrapper>
      </CommonPageWrapper>
    );

  if (posts.length === 1 && pageNumber === 1)
    return (
      <CommonPageWrapper category={category}>
        <FeaturedPost post={posts[0]} />
      </CommonPageWrapper>
    );

  const hasFeaturedPost = posts.length > 3 && pageNumber === 1;
  const cardPosts = hasFeaturedPost ? posts.slice(1) : posts;

  return (
    <CommonPageWrapper category={category}>
      {hasFeaturedPost && <FeaturedPost post={posts[0]} />}
      <Container>
        <CardsWrapper hasFeaturedPost={hasFeaturedPost}>
          {cardPosts.map(post => (
            <PostCard post={post} />
          ))}
        </CardsWrapper>
        {hasPagination && (
          <PaginationWrapper>
            {hasPreviousPage && (
              <LinkButton
                internal
                to={`/blog/${category.slug.current}/${pageNumber - 1}`}
              >
                ◀ Nowsze posty
              </LinkButton>
            )}
            {hasNextPage && (
              <LinkButton
                internal
                to={`/blog/${category.slug.current}/${pageNumber + 1}`}
              >
                Starsze posty ▶
              </LinkButton>
            )}
          </PaginationWrapper>
        )}
      </Container>
    </CommonPageWrapper>
  );
};

export const pageQuery = graphql`
  # prettier-ignore
  query CategoryPostsQuery($skip: Int, $postsPerPage: Int, $categorySlugs: [String]) {
    allSanityPost(
      limit: $postsPerPage
      skip: $skip
      filter: { category: {slug: { current: { in: $categorySlugs } } } }
      sort: { fields: publishedAt, order: DESC }
    ) {
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
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogCategory;

// export const pageQuery = graphql`
//   # prettier-ignore
//   query CategoryPostsQuery($skip: Int, $postsPerPage: Int, $categoryId: String) {
//     allSanityPost(
//       limit: $postsPerPage,
//       skip: $skip,
//       sort: { fields: publishedAt, order: DESC },
//       filter: { category: { id: { eq: $categoryId } } }
//     ) {
//       nodes {
//         title
//         excerpt
//         publishedAt
//         slug {
//           current
//         }
//         category {
//           id
//           slug {
//             current
//           }
//           title
//         }
//         mainImage {
//           asset {
//             fluid(maxWidth: 1024) {
//               ...GatsbySanityImageFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
