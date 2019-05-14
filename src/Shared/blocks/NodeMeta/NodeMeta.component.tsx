import * as React from 'react';

import { FormattedDate } from '../../elements/FormattedDate/FormattedDate.component';
import { Link } from '../../elements/Link/Link.component';
import { Node } from '../../types/Node.models';

import { TagList } from '../../../Taxonomy/blocks/TagList/TagList.component';

import './NodeMeta.scss';

interface Props {
  node: Node;
}

export const NodeMeta: React.StatelessComponent<Props> = ({ node }) => {
  return (
    <div className="node-meta">
      <p className="node-published">
        <span className="verbose">
          this <em>{node.type}</em> was{' '}
        </span>
        published{' '}
        <Link href={node.path} className="node-permalink">
          <FormattedDate date={node.created} />
        </Link>
        {node.tags && node.tags.length && <span> under: </span>}
      </p>{' '}
      <TagList tags={node.tags} />
    </div>
  );
};
