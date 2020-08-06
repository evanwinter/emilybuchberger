/**
 * Allows access to variables in `.env.*` files
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Emily Buchberger`,
    description: `Emily Buchberger is a designer in Chicago, Illinois.`,
    author: `Evan Winter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emily Buchberger`,
        short_name: `Emily Buchberger`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#e0d4c6`,
        display: `standalone`,
        icon: `src/assets/icons/favicon/smiley.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      export: `GATSBY_CONTENTFUL_OFFLINE=true`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-plugin-layout`,
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
