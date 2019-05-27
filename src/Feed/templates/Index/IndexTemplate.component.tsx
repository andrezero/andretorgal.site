import * as React from 'react';

import { Head } from '../../../Shared/elements/Head/Head.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { Node } from '../../../Shared/types/Node.models';
import { PageNode } from '../../../Shared/types/Page.models';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../../Site/blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../../Site/blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';

import { NodeList } from '../../groups/NodeList/NodeList.component';

import './IndexTemplate.scss';

interface Props {
  page: PageNode;
  featured: Node[];
  latest: Node[];
  updated: Node[];
}

export type IndexTemplateProps = Props;

export const IndexTemplate: React.StatelessComponent<Props> = ({ page, latest, featured, updated }) => {
  const header = <SiteHeader node={page} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="feed-index" header={header} footer={footer}>
      <Head node={page} />

      <section className="container">
        <h1 className="page-title">{page.title}</h1>

        {featured.length > 0 && (
          <section>
            <h2>Featured content</h2>
            <NodeList nodes={featured} level={3} />
          </section>
        )}

        {latest.length > 0 && (
          <section>
            <h2>Recently published</h2>
            <NodeList nodes={latest} level={3} />
          </section>
        )}

        {updated.length > 0 && (
          <section>
            <h2>Recently updated</h2>
            <NodeList nodes={updated} level={3} />
          </section>
        )}
      </section>

      <LinkToTop />
    </Layout>
  );
};

export interface IndexTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<IndexTemplateRouteData>(IndexTemplate);

export default Container;
