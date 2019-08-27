require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
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
        url: "http://hamerlincom.local/graphql",
      },
    },
  ],
}
