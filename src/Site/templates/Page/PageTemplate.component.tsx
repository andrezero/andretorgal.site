import * as React from 'react';
import { Head } from 'react-static';

import { MarkdownBasic } from '../../../Shared/elements/MarkdownBasic/MarkdownBasic.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { PageNode } from '../../../Shared/types/Page.models';
import { RouteData } from '../../../Shared/types/Route.models';

import { SiteFooter } from '../../blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../elements/LinkToTop/LinkToTop.component';

import './PageTemplate.scss';

interface Props {
  page: PageNode;
}

export const PageTemplate: React.StatelessComponent<Props> = ({ page }) => {
  const header = <SiteHeader page={page} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="site-page" header={header} footer={footer}>
      <Head title={page.title} meta={page.meta} />

      <section className="container">
        <h1 className="page-title">{page.title}</h1>

        <MarkdownBasic>{page.content}</MarkdownBasic>

        <LinkToTop />
      </section>
    </Layout>
  );
};

export interface PageTemplateRouteData extends RouteData, Props {}

const Container = templateContainer<PageTemplateRouteData>(PageTemplate);

export default Container;
