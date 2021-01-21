require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Dobra Praktyka Żeglarska`,
    description: `Ilość przepłynięcia jakiej jeszcze nie widziałeś.`,
    author: `@depezet`,
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -40,
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
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
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
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
  ],
};
