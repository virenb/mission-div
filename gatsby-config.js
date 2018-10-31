module.exports = {
  siteMetadata: {
    title: 'Mission Diversity',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-transformer-json', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data',
      },
    }
  ],
}
