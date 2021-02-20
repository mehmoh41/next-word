import React from 'react';
import Link from 'next/link';
import withLayout from '../components/withLayout';


const HomePage = () => (
  <div>
    <h1>Welcome to my blog</h1>
    <Link href="/blog"><a>Go to the recent posts</a></Link>
  </div>
);

export default withLayout(HomePage);
