import * as React from 'react';
import { Head } from 'react-static';

import Link from '../../../Shared/elements/Link/Link.component';
import Markdown from '../../../Shared/elements/Markdown/Markdown.component';
import DefaultLayout from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';

import { Post } from '../../types/Post.model';

import * as styles from './PostTemplate.module.scss';

interface Props {
  post: Post;
}

export const PostTemplate: React.StatelessComponent<Props> = props => {
  return (
    <DefaultLayout>
      <Head title={props.post.title} meta={props.post.meta} />
      <Link to="/posts/">{'<'} Back</Link>
      <h1 className={styles.Post}>{props.post.title}</h1>
      <Markdown text={props.post.abstract.source} />
      <Markdown text={props.post.content.source} />
    </DefaultLayout>
  );
};
