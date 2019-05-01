import * as React from 'react';
import { useSiteData } from 'react-static';

import { Link } from '../../../Shared/elements/Link/Link.component';
import { SROnly } from '../../../Shared/elements/SROnly/SROnly.component';
import { ContentPage } from '../../../Shared/types/Page.model';

import { SiteNav } from '../SiteNav/SiteNav.component';

import * as styles from './SiteHeader.module.scss';

interface Props {
  page: ContentPage;
  children?: React.ReactNode;
}

export const SiteHeader: React.StatelessComponent<Props> = ({ page, children }) => {
  const site = useSiteData();
  return (
    <>
      <header className={`site-header ${styles.Module}`} role="banner">
        <div className={styles.Container}>
          <SROnly>
            current page:{page.title}
            <Link href="#page-contents">skip to page contents</Link>
          </SROnly>
          <h1 className={styles.Title}>
            <Link to="/">{site.title}</Link>
          </h1>
          <SiteNav page={page} />
        </div>
      </header>
      {children}
      <hr />
    </>
  );
};
