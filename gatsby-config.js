module.exports = {
  siteMetadata: {
    title: `BlueGreenWebDev`,
    description: `My name is Nathaniel. I am a full stack web developer with a passion for design.`,
    author: `@bluegreenwizard`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/static/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `social`,
        path: `${__dirname}/src/static/social`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/static/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bluegreenwebdev`,
        start_url: `/`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `assistant`,
          'Fredericka+the+Great',
        ],
        display: 'swap',
      }
    },
  ],
}
