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
  const { createPage, createRedirect } = actions;

  //Create redirection for cruises root
  createRedirect({
    fromPath: `/rejsy`,
    toPath: `/rejsy/dpz-world-tour`,
    isPermanent: true,
    statusCode: 200,
  });

  //Fetch data needed for pages generation
  const data = await graphql(`
    {
      allSanityCategory {
        nodes {
          slug {
            current
          }
          title
        }
      }
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
          category {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (data.errors) {
    throw data.errors;
  }

  //Get categories, posts from fetched datae
  const categories = get(data, "data.allSanityCategory.nodes", []);
  const posts = get(data, "data.allSanityPost.nodes", []);

  //Posts per page for categories pages
  const postsPerPage = 10;

  //Create categories pages (empty and redirects)
  categories.forEach(category => {
    const path = `/blog/${category.slug.current}/1`;

    createRedirect({
      fromPath: `/blog/${category.slug.current}`,
      toPath: path,
      isPermanent: true,
    });
    createPage({
      path,
      component: require.resolve("./src/templates/blog-category.js"),
      context: {
        category,
        pagesCount: 0,
        postsPerPage,
        pageNumber: 1,
        skip: 0,
        categorySlugs: [category.slug.current],
      },
    });
  });

  //Create categories pages (paginated)
  categories.forEach(category => {
    const postsCount = posts.filter(post => post.category.id === category.id)
      .length;
    const pagesCount = Math.ceil(postsCount / postsPerPage);

    for (let i = 1; i <= pagesCount; i++) {
      const path = `/blog/${category.slug.current}/${i}`;

      createPage({
        path,
        component: require.resolve("./src/templates/blog-category.js"),
        context: {
          category,
          pagesCount,
          postsPerPage,
          pageNumber: i,
          skip: postsPerPage * (i - 1),
          categorySlugs: [category.slug.current],
        },
      });
    }
  });

  //Create all categories pseudo category
  const pagesCount = Math.ceil(posts.length / postsPerPage);
  const allPostsCategory = {
    title: "Wszystkie kategorie",
    slug: {
      current: "wszystkie-kategorie",
    },
  };

  createRedirect({
    fromPath: `/blog`,
    toPath: `/blog/wszystkie-kategorie/1`,
    isPermanent: true,
  });

  createRedirect({
    fromPath: `/blog/wszystkie-kategorie`,
    toPath: `/blog/wszystkie-kategorie/1`,
    isPermanent: true,
  });

  for (let i = 1; i <= pagesCount; i++) {
    const path = `/blog/wszystkie-kategorie/${i}`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog-category.js"),
      context: {
        category: allPostsCategory,
        pagesCount,
        postsPerPage,
        pageNumber: i,
        skip: postsPerPage * (i - 1),
        categorySlugs: categories.map(category => category.slug.current),
      },
    });
  }

  //Create single posts` pages
  posts.forEach(post => {
    const path = `/blog/${post.category.slug.current}/${post.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/blog-post.js"),
      context: { id: post.id },
    });
  });
};
