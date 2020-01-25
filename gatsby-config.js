// This file is only needed if we want to customize or add plugins
module.exports = {
  siteMetadata: {
    title: 'My first gatsby web',
    description: 'The first gatsby web - learning how to use gatsby',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet', // to access header part
    // we use an object when we want to pass more options besides the resolve (the resolve only is equivalent to doing like in the 2 previous lines)
    {
      resolve: 'gatsby-plugin-mdx', // to use mdx files and include the layout around them
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // we let our local files in the graphql layer
      options: {
        name: 'posts',
        path: 'posts', // it is going to look for the files in posts and transform them into graphql nodes
      },
    },
  ],
};
