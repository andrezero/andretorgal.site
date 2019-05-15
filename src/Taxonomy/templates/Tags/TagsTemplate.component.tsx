import * as React from 'react';
import { Head } from 'react-static';

import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { Node } from '../../../Shared/types/Node.models';
import { PageNode } from '../../../Shared/types/Page.models';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../../Site/blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../../Site/blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';

import { TagList } from '../../groups/TagList/TagList.component';
import { TagNode } from '../../types/Tag.models';

import './TagsTemplate.scss';
import { TagListCompact } from '../../groups/TagListCompact/TagListCompact.component';

interface Props {
  page: PageNode;
  topTags: TagNode[];
  otherTags: TagNode[];
}

export const TagsTemplate: React.StatelessComponent<Props> = ({ page, topTags, otherTags }) => {
  const header = <SiteHeader node={page} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="taxonomy-tags" header={header} footer={footer}>
      <Head title={page.title} meta={page.meta.doc} />

      <section className="container top-tags">
        <h1 className="page-title">Top tags</h1>
        <TagList tags={topTags} />
      </section>

      <section className="container other-tags">
        <h2>Other tags</h2>
        <TagListCompact tags={otherTags} />
      </section>

      <LinkToTop />
    </Layout>
  );
};

export interface TagsTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<TagsTemplateRouteData>(TagsTemplate);

export default Container;
