import * as React from 'react';

import { Head } from '../../../Shared/elements/Head/Head.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { Node } from '../../../Shared/types/Node.models';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../../Site/blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../../Site/blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';

import { NodeList } from '../../../Feed/groups/NodeList/NodeList.component';

import { TagDetail } from '../../groups/TagDetail/TagDetail.component';
import { TagNode } from '../../types/Tag.models';

import './TagTemplate.scss';

export interface Props {
  tag: TagNode;
  nodes: Node[];
}

export const TagTemplate: React.StatelessComponent<Props> = ({ tag, nodes }) => {
  const header = <SiteHeader node={tag} />;
  const footer = <SiteFooter />;
  const title = `#${tag.title}`;
  return (
    <Layout className="taxonomy-tag" header={header} footer={footer}>
      <Head node={tag} title={title} />

      <section className="container">
        <TagDetail tag={tag} />
      </section>

      <section className="container">
        <h2>All items under {title}</h2>
        <NodeList nodes={nodes} level={3} />
      </section>

      <LinkToTop />
    </Layout>
  );
};

export interface TagTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<TagTemplateRouteData>(TagTemplate);

export default Container;
