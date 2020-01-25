import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import StyledReadLink from './read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75 rem;
      padding-bottom: 1rem;

      :first-of:type {
        margin-top: 1rem;
      }
    `}
  >
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <StyledReadLink to={post.slug}>read this post &rarr;</StyledReadLink>
  </article>
);
export default PostPreview;
