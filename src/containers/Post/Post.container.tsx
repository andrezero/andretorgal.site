import * as React from 'react';
import { Head, useRouteData } from 'react-static';

import * as styles from './Post.scss';

import Link from '../../atoms/Link/Link.atom';
import Markdown from '../../atoms/Markdown/Markdown.atom';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout.component';
import { PostRouteData } from '../../types/Post.model';

const PostContainer: React.StatelessComponent<{}> = () => {
  const routeData: PostRouteData = useRouteData();
  const { post } = routeData;
  return (
    <DefaultLayout>
      <Head title={post.title} meta={post.meta} />
      <Link to="/posts/">{'<'} Back</Link>
      <h1 className={styles.Post}>{post.title}</h1>
      <Markdown text={post.abstract.source} />
      <Markdown text={post.content.source} />
    </DefaultLayout>
  );
};

export default PostContainer;
