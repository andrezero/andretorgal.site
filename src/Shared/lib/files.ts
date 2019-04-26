import fs from 'fs';
import path from 'path';
import util from 'util';

import { DirectoryNode, FileNode, FileSysNode } from './types/File.types';

interface Options {
  root: string;
  index: string;
  ext: string;
  regexp: RegExp;
  recursive: boolean;
}

const filterNodes = (nodes: Array<FileSysNode | void>): FileSysNode[] => {
  return nodes.reduce(
    (acc, node: FileSysNode) => {
      if (!node) {
        return acc;
      }
      if (acc.find(item => item.path === node.path)) {
        return acc;
      }
      if (node.type === 'dir' && !(node as DirectoryNode).hasIndex && !(node as DirectoryNode).children.length) {
        return acc;
      }
      return acc.concat(node);
    },
    [] as FileSysNode[]
  );
};

const readNode = async (options: Options, root: string, filename: string): Promise<FileSysNode | void> => {
  const fullPath = path.resolve(options.root, root, filename);
  const stat = fs.statSync(fullPath);
  const isDir = stat.isDirectory();
  if (isDir && options.recursive) {
    return await readDir(options, stat, fullPath, root, filename);
  }
  return await readFile(options, stat, fullPath, root, filename);
};

const readFile = async (
  options: Options,
  stat: fs.Stats,
  fullPath: string,
  root: string,
  filename: string
): Promise<FileNode | void> => {
  const matches = filename.match(options.regexp);
  if (!matches) {
    return;
  }
  const fileNoExt = matches[1];
  const pathName = fileNoExt === options.index ? '' : fileNoExt;
  return {
    type: 'file',
    name: fileNoExt,
    path: path.join(root, pathName),
    filename: fullPath,
    contents: fs.readFileSync(fullPath, 'utf8'),
    created: new Date(util.inspect(stat.birthtime))
  };
};

const readDir = async (
  options: Options,
  stat: fs.Stats,
  fullPath: string,
  root: string,
  filename: string
): Promise<DirectoryNode> => {
  const files = fs.readdirSync(fullPath);
  const newRoot = path.join(root, filename);
  const children = await Promise.all(files.map(fname => readNode(options, newRoot, fname)));
  let filtered = filterNodes(children);
  const index = filtered.find(node => node.name === options.index);
  if (index) {
    filtered = filtered.filter(node => node !== index);
  }
  const dirPath = path.join(root, filename);
  return {
    type: 'dir',
    name: filename || '',
    path: dirPath === '.' ? '/' : dirPath,
    filename: fullPath,
    contents: index ? index.contents : '',
    created: new Date(util.inspect(stat.birthtime)),
    hasIndex: !!index,
    children: filtered
  };
};

export const collect = async (root: string, recursive?: boolean): Promise<DirectoryNode> => {
  const fullPath = path.resolve(root);
  const hasIndex = fs.existsSync(fullPath);
  const stat = fs.statSync(fullPath);
  const isDir = hasIndex && stat.isDirectory();
  if (!hasIndex || !isDir) {
    return {
      type: 'dir',
      name: '',
      filename: root,
      path: '',
      hasIndex: false,
      contents: '',
      created: new Date(),
      children: []
    };
  }
  const options: Options = {
    root,
    index: 'index',
    ext: 'md',
    regexp: /(.+)\.md$/,
    recursive: !!recursive
  };
  return readDir(options, stat, root, '', '');
};

export const flatten = (nodes: FileSysNode[], includeDirs?: 'indexes' | 'all'): Array<FileNode | DirectoryNode> => {
  return nodes.reduce(
    (acc, node: FileSysNode) => {
      const n = { ...node };
      if (n.type === 'file') {
        acc.push(n as FileNode);
        return acc;
      }
      const directory = n as DirectoryNode;
      const children = directory.children;
      if ((includeDirs === 'indexes' && directory.hasIndex) || includeDirs === 'all') {
        delete directory.children;
        acc.push(directory);
      }
      return acc.concat(flatten(children));
    },
    [] as Array<FileNode | DirectoryNode>
  );
};

export const map = <T extends FileNode | DirectoryNode, R>(node: T, fn: (node: T) => R | void): R | void => {
  if (node.type === 'dir') {
    const dir = node as DirectoryNode;
    const children = dir.children.map((child: T) => map<T, R>(child, fn));
    const ret = { ...fn(node), children: children.filter(item => item) };
    return ret as R;
  } else {
    return fn(node);
  }
};
