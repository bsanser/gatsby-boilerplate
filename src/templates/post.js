import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import StyledReadLink from '../components/read-link';

//query the necessary data for the post (given a slug)

export const query = graphql`
  query($slug: String!) {
    # the query takes a variable $slug - already in graphql because it was added to the gatsby-node context with that name
    mdx(frontmatter: { slug: { eq: $slug } }) {
      #this is the query
      frontmatter {
        # this is what we want from the result of the query
        title
        author
        imageAlt
      }
      body
    }
  }
`;

// data has the result of the query (in data) and what was included in the context of gatsby-node.js (in pageContext) - so everything added to context in the context

// we want to get the mdx content - i.e. every post (so we rename)

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.775rem;
      `}
    >
      Posted by {post.frontmatter.author}
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
    {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    <StyledReadLink to="/">&larr; back to all posts</StyledReadLink>
  </Layout>
);

export default PostTemplate;
