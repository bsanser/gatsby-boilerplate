exports.createPages = async ({ actions, graphql, reporter }) => {
  // note how we only need the slug and not all the post info. Each post will then require its own info - no passing around data unnecessarily, place queries where they are used
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }
  const posts = result.data.allMdx.nodes;

  //we are using forEach and not map because we don't need to return anything here
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: { // anything in the context I can pass it through (so we could pass all the post in theory; only the slug - instead we will do the query in the post template - where we need it)
        slug: post.frontmatter.slug,
      },
    });
  });
};
