import * as React from 'react';
import { Head } from 'react-static';

import { Hero } from '../../../Shared/blocks/Hero/Hero.component';
import { NodeParent } from '../../../Shared/blocks/NodeParent/NodeParent.component';
import { MarkdownBasic } from '../../../Shared/elements/MarkdownBasic/MarkdownBasic.component';
import { ResponsiveSrc } from '../../../Shared/elements/ResponsiveImg/ResponsiveImg.component';
import { DefaultLayout as Layout } from '../../../Shared/layout/DefaultLayout/DefaultLayout.component';
import { templateContainer } from '../../../Shared/TemplateContainer';
import { PageNode } from '../../../Shared/types/Page.models';

import { SiteFooter } from '../../blocks/SiteFooter/SiteFooter.component';
import { SiteHeader } from '../../blocks/SiteHeader/SiteHeader.component';
import { LinkToTop } from '../../elements/LinkToTop/LinkToTop.component';

import { PageTemplateProps as Props, PageTemplateRouteData } from '../Page/PageTemplate.component';

import './AboutTemplate.scss';

const renderHero = (page: PageNode) => {
  const img: ResponsiveSrc = {
    set: [['1024w', page.hero.img], ['2048w', page.hero.img]],
    sizes: ['100vw']
  };

  return (
    <Hero img={img}>
      <header className="hero-header">
        <NodeParent parent={page.links.parent} />
        <h1 className="page-title">{page.hero.title || page.title}</h1>
      </header>
      {page.abstract && <MarkdownBasic>{page.abstract}</MarkdownBasic>}
    </Hero>
  );
};

const renderHeader = (page: PageNode) => {
  return (
    <>
      <NodeParent parent={page.links.parent} />
      <h1 className="page-title">{page.title}</h1>
    </>
  );
};

export const AboutTemplate: React.StatelessComponent<Props> = ({ page }) => {
  const header = <SiteHeader node={page} />;
  const footer = <SiteFooter />;
  return (
    <Layout className="site-about" header={header} footer={footer}>
      <Head title={page.title} meta={page.meta} />

      {page.hero && renderHero(page)}

      <section className="container">
        {!page.hero && renderHeader(page)}

        <MarkdownBasic>{page.content}</MarkdownBasic>

        <LinkToTop />
      </section>
    </Layout>
  );
};

const Container = templateContainer<PageTemplateRouteData>(AboutTemplate);

export default Container;
