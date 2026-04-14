import type { ReactNode } from 'react';
import Link from 'next/link';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { siteNavLinks, siteTitle, socialLinks } from '@/app/layout.config';
import './globals.css';

export const metadata = {
  title: 'susuyan',
  description: 'Personal site',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen">
        <RootProvider>
          <header className="border-b border-fd-border">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
              <Link href="/" className="font-semibold tracking-tight">
                {siteTitle}
              </Link>

              <nav className="hidden flex-1 items-center justify-end gap-4 text-sm md:flex">
                {siteNavLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* 移动端：简化为可横向滚动的导航 */}
            <nav className="md:hidden border-t border-fd-border">
              <div className="mx-auto w-full max-w-6xl overflow-x-auto px-4 py-3">
                <div className="flex items-center gap-4 text-sm whitespace-nowrap">
                  {siteNavLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </header>

          <div>{children}</div>

          <footer className="border-t border-fd-border">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-fd-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} {siteTitle}</div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {socialLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fd-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </RootProvider>
      </body>
    </html>
  );
}
