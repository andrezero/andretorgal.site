import * as React from 'react';

import { BaseListItem } from '../../../Shared/blocks/BaseListItem/BaseListItem.component';
import { Link } from '../../../Shared/elements/Link/Link.component';
import { MarkdownBasic } from '../../../Shared/elements/MarkdownBasic/MarkdownBasic.component';
import { NodeDate } from '../../../Shared/elements/NodeDate/NodeDate.component';
import { ReadMore } from '../../../Shared/elements/ReadMore/ReadMore.component';

import { MetaNode } from '../../types/Meta.models';

import './MetaListItem.scss';

interface Props {
  node: MetaNode;
  level?: number;
  footer?: React.ReactNode;
}

export const MetaListItem: React.StatelessComponent<Props> = ({ node: meta, level = 2, footer }) => {
  const Tag = ('h' + level) as React.ElementType;
  const header = (
    <>
      Last updated: <NodeDate date={meta.updated} />
      <Tag className="node-title">
        <Link href={meta.path}>{meta.title}</Link>
      </Tag>
    </>
  );
  return (
    <BaseListItem className="meta-list-item" header={header} footer={footer}>
      <MarkdownBasic>{meta.abstract}</MarkdownBasic>
      <ReadMore path={meta.path} />
    </BaseListItem>
  );
};
