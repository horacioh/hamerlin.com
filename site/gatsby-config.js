require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Fumigadora Hamerlin, S.A.`,
    siteUrl: `https://www.hamerlin.com`,
    social: {
      facebook: "fumigadorahamerlinpty",
      instagram: "hamerlin_pty",
      whatsapp: "50760308417"
    }
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Wordpress",
        fieldName: "wordpress",
        url: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
      },
    },
  ],
}
