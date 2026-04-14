import { docs, meta } from '../.source/server';
import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';

const fumaSource = toFumadocsSource(docs, meta);

export const source = loader(fumaSource, {
  baseUrl: '/',
  /**
   * 站点采用 nikiv.dev 的结构：所有内容页直接挂在根路径
   * - / -> index.mdx
   * - /config -> config.mdx
   * - /journal/... -> journal/*
   */
  url(slugs) {
    if (!slugs || slugs.length === 0) return '/';
    return `/${slugs.join('/')}`;
  },
});
