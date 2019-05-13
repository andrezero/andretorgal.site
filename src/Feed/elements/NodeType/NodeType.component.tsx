import * as React from 'react';

import { Link } from '../../../Shared/elements/Link/Link.component';
import { Node } from '../../../Shared/types/Node.models';

import './NodeType.scss';

interface Props {
  node: Node;
}

export const NodeType: React.StatelessComponent<Props> = ({ node }) => {
  return (
    <span className="node-type">
      <span className="badge">{node.type}</span>
    </span>
  );
};
