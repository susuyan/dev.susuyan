import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './globals.css';

export const metadata = {
  title: 'SusuYan - Developer & Creator',
  description: 'Personal knowledge base and documentation',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
