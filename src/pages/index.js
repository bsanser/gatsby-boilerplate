import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hi barb</p>
    <Link to="/about">&larr; Go to about</Link>
  </Layout>
);
