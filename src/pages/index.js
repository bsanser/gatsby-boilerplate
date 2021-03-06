import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';

import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h1>Home</h1>
        <p>Hi barb</p>
        <Link to="/about">&larr; Go to about</Link>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
          // <pre>{JSON.stringify(post, null, 2)}</pre>
        ))}
        <Insta />
      </Layout>
    </>
  );
};
