import * as React from 'react';

import { LinkToTop } from '../../../Site/elements/LinkToTop/LinkToTop.component';
import { AutoScrollToTop } from '../../behaviours/AutoScrollToTop/AutoScrollToTop.component';
import { Anchor } from '../../elements/Anchor/Anchor.component';

import * as styles from './DefaultLayout.module.scss';

interface Props {
  className?: string;
  header: React.ReactNode;
  footer: React.ReactNode;
  children?: React.ReactNode;
}

export const DefaultLayout: React.StatelessComponent<Props> = ({ className, header, children, footer }) => {
  return (
    <AutoScrollToTop>
      <div className={`default-layout ${styles.DefaultLayout}`}>
        <Anchor id="top" />
        {header}
        <main className={`${className} layout-body ${styles.Body}`} role="main" id="page-contents">
          {children}
          <LinkToTop />
        </main>
        {footer}
      </div>
    </AutoScrollToTop>
  );
};
