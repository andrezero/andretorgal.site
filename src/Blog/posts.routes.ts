import { TemplateLocator } from '../Shared/lib/classes/TemplateLocator';
import { newNode } from '../Shared/lib/nodes';
import { newRoute } from '../Shared/lib/routes';
import { Route } from '../Shared/types/Route.models';

import { PageNode } from '../Shared/types/Page.models';
import { PostNode } from './types/Post.models';

import { HomeTemplateRouteData } from './templates/Home/HomeTemplate.component';
import { PostTemplateRouteData } from './templates/Post/PostTemplate.component';

const postListPageRoute = (templates: TemplateLocator, posts: PostNode[]): Route => {
  const defaults = {
    path: 'posts',
    template: 'Blog/Home'
  };
  const page = newNode('page', 'Latest Blog Posts', defaults) as PageNode;

  return newRoute<HomeTemplateRouteData>(templates, page, {
    posts,
    page
  });
};

interface Data {
  posts: PostNode[];
}

export const buildRoutes = async (templates: TemplateLocator, data: Data): Promise<Route[]> => {
  const postRoutes = data.posts.map(post => {
    return newRoute<PostTemplateRouteData>(templates, post, {
      post
    });
  });

  const pageRoute = postListPageRoute(templates, data.posts);
  return [...postRoutes, pageRoute];
};
