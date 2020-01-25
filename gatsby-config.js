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
    'gatsby-transformer-sharp', // for images: a transformer looks for nodes that are images and applies image transformations to them (a transformer in gatsby is a plugin that finds data and transforms it from one type to another)
    'gatsby-plugin-sharp', // for images: the plugin installs sharp and allows it to perform several things
    {
      resolve: 'gatsby-plugin-mdx', // to use mdx files and include the layout around them
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // we let our local files in the graphql layer
      options: {
        name: 'posts',
        path: 'posts', // it is going to look for the files in posts and transform them into graphql nodes
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // we let our local files in the graphql layer
      options: {
        name: 'images',
        path: 'images', // it is going to look for the files in images and apply actions in the transformer
      },
    },
  ],
};
