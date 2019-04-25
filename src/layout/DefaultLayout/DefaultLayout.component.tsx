import * as React from 'react';

import * as styles from './DefaultLayout.module.scss';

import Anchor from '../../atoms/Anchor/Anchor.atom';
import AutoScrollToTop from '../../layout/AutoScrollToTop/AutoScrollToTop.component';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const DefaultLayout: React.StatelessComponent<Props> = ({ className, children }) => {
  return (
    <AutoScrollToTop>
      <div className={`${styles.DefaultLayout} ${className}`}>
        <Anchor id="page-contents" />
        <main className="layout-body" role="main">
          {children}
          <p className="to-top" role="navigation">
            <a className="link" href="#page-contents" aria-label="back to the top of the page">
              &#8679;
            </a>
          </p>
        </main>
      </div>
    </AutoScrollToTop>
  );
};

export default DefaultLayout;
