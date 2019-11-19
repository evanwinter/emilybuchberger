/**
 * Allows access to variables in `.env.*` files
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Emily Buchberger`,
    description: `Emily Buchberger is a Chicago-based designer.`,
    author: `Evan Winter`,
  },
  plugins: [
    // react helmet
    `gatsby-plugin-react-helmet`,

    // filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    // sharp
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon/smiley.png`,
      },
    },

    // offline
    `gatsby-plugin-offline`,

    // contentful
    {
      resolve: `gatsby-source-contentful`,
      export: `GATSBY_CONTENTFUL_OFFLINE=true`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        downloadLocal: true,
      },
    },

    // sass
    {
      resolve: `gatsby-plugin-sass`,
    },

    // v1 layout
    `gatsby-plugin-layout`,

    // react svg
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
}
