/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const get = require("lodash.get");
const path = require("path");

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-youtube-background/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postsData = await graphql(`
    {
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
          category {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (postsData.errors) {
    throw postsData.errors;
  }

  const posts = get(postsData, "data.allSanityPost.nodes", []);

  posts.forEach(post => {
    const path = `/blog/${post.category.slug.current}/${post.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id: post.id },
    });
  });
};
