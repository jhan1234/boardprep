module.exports = {
  siteMetadata: {
    title: `boardprep`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `preop`,
        path: `${__dirname}/preop`,
      }
    },
  ],
}
