module.exports = {
  siteMetadata: {
    title: `Fumigadora Hamerlin, S.A.`,
    description: `Vive Libre de plagas con nuestro manejo integral. en Fumigadora Hamerlin llevamos mas de 30 años ayudando a nuestros clientes a estar libre de cualquier tipo de plagas: cucarachas, hormigas, ratones, gorgojos, comejen, murcielagos, animales exoticos...`,
    author: `@hamerlin`,
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
        name: `hamerlin.com`,
        short_name: `hamerlin`,
        start_url: `/`,
        background_color: `#1A254E`,
        theme_color: `#1A254E`,
        display: `minimal-ui`,
        icon: `src/images/hamerlin-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
