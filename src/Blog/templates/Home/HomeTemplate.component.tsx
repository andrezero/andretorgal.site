import * as React from 'react';

import { Head } from '../../../Shared/elements/Head/Head.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { PageNode } from '../../../Shared/types/Page.models';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../../Site/blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../../Site/blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';

import { PostList } from '../../groups/PostList/PostList.component';
import { PostNode } from '../../types/Post.models';

import './HomeTemplate.scss';

interface Props {
  page: PageNode;
  posts: PostNode[];
}

export const HomeTemplate: React.StatelessComponent<Props> = ({ page, posts }) => {
  const header = <SiteHeader node={page} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="blog-home" header={header} footer={footer}>
      <Head node={page} />

      <section className="container">
        <h1 className="page-title">{page.title}</h1>

        <PostList posts={posts} />
      </section>

      <LinkToTop />
    </Layout>
  );
};

export interface HomeTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<HomeTemplateRouteData>(HomeTemplate);

export default Container;
