const website = require("./config/website")
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: website.url + pathPrefix,
    pathPrefix: website.pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    siteLanguage: website.siteLanguage,
    author: website.author,
    location: website.location,
    ogLanguage: website.ogLanguage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: website.pathPrefix,
        background_color: website.background_color,
        theme_color: website.theme_color,
        display: website.display,
        icon: website.icon,
        icons: [
          {
            src: '/icons/typetech_mask_192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icons/typetech_mask_512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `500`, `600`, `700`, `800`, `900`],
          },
        ],
      },
    },
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
