import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">SusuYan</h1>
      <p className="text-lg text-fd-muted-foreground mb-8">
        Developer & Creator
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg hover:bg-fd-primary/90 transition-colors"
      >
        进入文档
      </Link>
    </main>
  );
}
