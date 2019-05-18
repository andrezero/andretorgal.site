export type Tag = string;

export type NodeFeature = any;

export interface DocMeta {
  name: string;
  value: string;
}

export interface OpenGraphMeta {
  property: string;
  content: string;
}

export interface NodeLink {
  type: string;
  path: string;
  title: string;
}

export interface NodeLinks {
  children?: NodeLink[];
  related?: NodeLink[];
  parent?: NodeLink;
  parents?: NodeLink[];
  next?: NodeLink;
  previous?: NodeLink;
}

export interface Asset {
  sources: NodeLink[];
  type: string;
  title?: string;
  alt?: string;
  url: string;
  originalUrl: string;
  profiles: string[];
  src: {
    [profile: string]: any;
  };
}

export interface NodeMeta {
  source: string;
  template: string;
  classes: string;
  doc: DocMeta[];
  og: OpenGraphMeta[];
  links: NodeLinks;
  assets: Asset[];
}

export interface Node {
  type: string;
  path: string;
  title: string;
  abstract: string;
  content: string;
  tags: Tag[];
  features: {
    [key: string]: NodeFeature;
  };
  meta: NodeMeta;
  created: Date;
  updated: Date;
}
