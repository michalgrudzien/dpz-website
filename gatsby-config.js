module.exports = {
  siteMetadata: {
    title: `Dobra Praktyka Żeglarska`,
    description: `Ilość przepłynięcia jakiej jeszcze nie widziałeś.`,
    author: `@depezet`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            weights: [`300`, `500`],
          },
          {
            family: `Bebas Neue`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: "portal",
        id: "portal",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "850bz552",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
        token:
          "sksJyei4hmtYtS9T4eCGqnbxs2hDqzkWhDMat4wn57jDPS0z1vfe9yOkjXsLz9FXQApy8sWll22lCR44Z99Pqxyccgh9QW1fgLj96hjA4bePRirknJBJe3Lj0zxaHjGHwND8ZS2VfN4JAUO6RWSrMQr0Vqlq4sXkjUJxOFfA1ukUrmt8CJU4",
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `DPŻ`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/assets/images/dpz_logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
