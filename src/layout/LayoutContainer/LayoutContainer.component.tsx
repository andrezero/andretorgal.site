import * as React from 'react';

import './LayoutContainer.scss';

import Anchor from 'atoms/Anchor/Anchor.component';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const LayoutContainer: React.StatelessComponent<Props> = ({ className, children }) => {
  return (
    <div className="layout-container">
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
  );
};

export default LayoutContainer;
