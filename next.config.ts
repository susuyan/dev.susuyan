import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const config: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      '@/.source': './.source/index.ts',
    },
  },
};

export default withMDX(config);
