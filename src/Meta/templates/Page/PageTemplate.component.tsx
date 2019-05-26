import * as React from 'react';

import { NodeChildren } from '../../../Shared/blocks/NodeChildren/NodeChildren.component';
import { NodeMeta } from '../../../Shared/blocks/NodeMeta/NodeMeta.component';
import { NodeParent } from '../../../Shared/blocks/NodeParent/NodeParent.component';
import { Head } from '../../../Shared/elements/Head/Head.component';
import { NodeMarkdown } from '../../../Shared/elements/NodeMarkdown/NodeMarkdown.component';
import { NodeNotes } from '../../../Shared/elements/NodeNotes/NodeNotes.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../../Site/blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../../Site/blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';

import { MetaNode } from '../..//types/Meta.models';

import './PageTemplate.scss';

interface Props {
  meta: MetaNode;
}

export const PageTemplate: React.StatelessComponent<Props> = ({ meta }) => {
  const header = <SiteHeader node={meta} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="meta-page" header={header} footer={footer}>
      <Head node={meta} />

      <section className="container">
        <article className="media-item">
          <header>
            <NodeParent parent={meta.meta.links.parent} />
          </header>
          <h1 className="page-title">{meta.title}</h1>
          <NodeMarkdown node={meta}>{meta.abstract}</NodeMarkdown>
          <NodeChildren children={meta.meta.links.children} />
          <NodeMarkdown node={meta}>{meta.content}</NodeMarkdown>
        </article>
        <footer>
          {meta.meta.notes && <NodeNotes node={meta} />}
          <NodeMeta node={meta} showUpdated={true} />
        </footer>
      </section>

      <LinkToTop />
    </Layout>
  );
};

export interface PageTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<PageTemplateRouteData>(PageTemplate);

export default Container;
