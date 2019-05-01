import * as markdown from '../../../Shared/lib/markdown';

import { MarkdownComponentProps, markdownFactory } from '../../../Shared/elements/Markdown/Markdown.factory';

const createComponent = () => markdownFactory(markdown.strippedLinks(), {}, 'post-abstract');

export const PostAbstract: React.StatelessComponent<MarkdownComponentProps> = createComponent();