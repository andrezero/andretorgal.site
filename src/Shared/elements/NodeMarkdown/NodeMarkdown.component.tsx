import * as React from 'react';

import * as markdown from '../../lib/markdown';

import { Node } from '../../types/Node.models';
import { NodeImg } from '../NodeImg/NodeImg.component';

import { basicComponentMap, MarkdownComponentProps, markdownFactory } from '../Markdown/Markdown.factory';

import './NodeMarkdown.scss';

interface NodeMarkdownProps {
  node: Node;
  strip?: boolean;
}

type Props = MarkdownComponentProps & NodeMarkdownProps;

const withNodeAndProfiles = (WrappedComponent: React.ComponentType, node: Node): React.ComponentType => (
  props: any
) => {
  const profiles = ['image.small', 'image.medium', 'image.large'];
  return <WrappedComponent node={node} profiles={profiles} {...props} />;
};

export const NodeMarkdown: React.StatelessComponent<Props> = ({
  node,
  strip,
  children,
  className = 'node-markdown',
  ...rest
}: Props) => {
  const assetImgWithNode = withNodeAndProfiles(NodeImg, node);
  const componentMap = { ...basicComponentMap, img: assetImgWithNode };
  const MarkdownStripped = markdownFactory(markdown.stripLinks(), basicComponentMap);
  const MarkdownFull = markdownFactory(markdown.basic(), componentMap);
  return strip ? (
    <MarkdownStripped className={className} {...rest}>
      {children}
    </MarkdownStripped>
  ) : (
    <MarkdownFull className={className} {...rest}>
      {children}
    </MarkdownFull>
  );
};
