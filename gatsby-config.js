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
    monetizationAddress: `$ilp.uphold.com/3dH6dNfywHzx`
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

    `gatsby-plugin-image`,

    // sharp
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emily Buchberger`,
        short_name: `embuch`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
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
