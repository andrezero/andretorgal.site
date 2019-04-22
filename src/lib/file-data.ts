import path from 'path';
import slugify from 'slugify';

import { PageMeta } from 'types/Page.model';
import { File } from './files';
import { humanise } from './strings';

const remove = /[*+~.()'"!:@]/g;
const slug = (str: string) => slugify(str, { remove, lower: true });

export function makeTitle(title: string, name: string): string {
  return title || humanise(name);
}

export function makePath(prefix: string | string[], customPath: string, title: string): { rel: string; path: string } {
  const rel = slug(customPath || title);
  const parts = typeof prefix === 'string' ? [prefix] : prefix;
  const pth = path.join(...parts, rel);
  return {
    rel,
    path: pth
  };
}

export function makeTemplate(data: any, def: string): string {
  const container = data.template || def;
  return `src/containers/${container}/${container}.container`;
}

export function makeMeta(data?: any) {
  const meta: PageMeta = [];
  meta.push({ name: 'description', value: data && data.abstract });
  meta.push({ name: 'created', value: data && data.created });
  meta.push({ name: 'author', value: data && data.author });
  meta.push({ property: 'og:url', content: data && data.url });
  meta.push({ property: 'og:type', content: (data && data.type) || 'article' });
  meta.push({ property: 'og:title', content: data && data.title });
  meta.push({ property: 'og:description', content: data && data.abstract });
  meta.push({ property: 'og:image', content: data && data.image });
  return meta;
}
