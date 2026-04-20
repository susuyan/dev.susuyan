import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import './globals.css';

export const metadata = {
  title: 'susuyan',
  description: 'Personal knowledge base',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen">
        <RootProvider>
          <DocsLayout
            {...baseOptions()}
            tree={source.pageTree}
            sidebar={{
              enabled: true,
              collapsible: true, // 允许折叠，保持克制
              defaultOpenLevel: 0, // 默认展开根级别
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
