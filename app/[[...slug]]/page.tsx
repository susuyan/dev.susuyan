import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';
import { DocsBody } from 'fumadocs-ui/page';
import { source } from '@/lib/source';

interface DocData {
  body: React.ComponentType;
  toc: Array<{ depth: number; title: string; url: string }>;
  title: string;
  description?: string;
  full?: boolean;
}

function getPrevNext(url: string) {
  const pages = source.getPages();
  const idx = pages.findIndex((p) => p.url === url);
  return {
    prev: idx > 0 ? pages[idx - 1] : null,
    next: idx >= 0 && idx < pages.length - 1 ? pages[idx + 1] : null,
  };
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug ?? [];

  const page = source.getPage(slugs);
  if (!page) notFound();

  const data = page.data as unknown as DocData;
  const MDX = data.body;
  const { prev, next } = getPrevNext(page.url);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
        <main>
          <header className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight">{data.title}</h1>
            {data.description ? (
              <p className="mt-2 text-fd-muted-foreground">{data.description}</p>
            ) : null}
          </header>

          <DocsBody>
            <MDX />
          </DocsBody>

          <nav className="mt-12 flex items-center justify-between border-t border-fd-border pt-6 text-sm">
            <div>
              {prev ? (
                <Link className="text-fd-muted-foreground hover:text-fd-foreground" href={prev.url}>
                  ← {prev.data.title}
                </Link>
              ) : null}
            </div>
            <div className="text-right">
              {next ? (
                <Link className="text-fd-muted-foreground hover:text-fd-foreground" href={next.url}>
                  {next.data.title} →
                </Link>
              ) : null}
            </div>
          </nav>
        </main>

        {data.toc?.length ? (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="mb-3 text-xs font-medium text-fd-muted-foreground">On this page</div>
              <ul className="space-y-2 text-sm">
                {data.toc.map((item) => (
                  <li key={item.url} className={item.depth > 2 ? 'pl-3' : ''}>
                    <a
                      href={item.url}
                      className="text-fd-muted-foreground hover:text-fd-foreground"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // 可选 catch-all 需要显式包含根路径
  const params = source.generateParams();
  return [{ slug: [] as string[] }, ...params];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const slugs = params.slug ?? [];

  const page = source.getPage(slugs);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}

