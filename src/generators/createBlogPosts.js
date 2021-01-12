import get from "lodash.get";

export default (graphql, createPage) => {
  const postsData = graphql`
    {
      allSanityPost {
        nodes {
          title
          id
          publishedAt(formatString: "DD.MM.YYYY")
          slug {
            current
          }
          author {
            name
          }
        }
      }
    }
  `;

  if (postsData.errors) {
    throw postsData.errors;
  }

  const posts = get(postsData, "data.allSanityPost.nodes", []);

  posts.forEach((post, index) => {
    const path = `/blog/${post.slug.current}`;

    createPage({
      path,
      component: require.resolve("templates/blog-post.js"),
      context: { post },
    });
  });
};
