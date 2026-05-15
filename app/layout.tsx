import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | susuyan',
    default: 'susuyan',
  },
  description: 'Personal knowledge base — 温暖、手工感、有温度的数字花园',
  keywords: ['susuyan', 'knowledge base', 'iOS', 'developer', 'blog'],
  authors: [{ name: 'susuyan' }],
  openGraph: {
    title: 'susuyan',
    description: 'Personal knowledge base — 温暖、手工感、有温度的数字花园',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'susuyan',
    description: 'Personal knowledge base — 温暖、手工感、有温度的数字花园',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 字体预加载 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <RootProvider>
          <DocsLayout
            {...baseOptions()}
            tree={source.pageTree}
            sidebar={{
              enabled: true,
              collapsible: true,
              defaultOpenLevel: 0,
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
