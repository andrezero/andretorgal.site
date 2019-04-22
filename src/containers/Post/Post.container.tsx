import * as React from 'react';
import { useRouteData } from 'react-static';

import './Post.css';

import Link from 'atoms/Link/Link.component';
import Markdown from 'atoms/Markdown/Markdown.component';
import LayoutContainer from 'layout/LayoutContainer/LayoutContainer.component';

export default function Post() {
  const { post } = (useRouteData as any)();
  return (
    <LayoutContainer>
      <Link to="/posts/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <Markdown text={post.content} />
    </LayoutContainer>
  );
}