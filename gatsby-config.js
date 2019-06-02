const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Dobra Praktyka Żeglarska`,
    description: `Ilość przepłynięcia jakiej jeszcze nie widziałeś.`,
    author: `@depezet`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
