import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl space-y-4">
        <h1 className="text-3xl font-semibold">Splendor Docs</h1>
        <p className="text-sm text-fd-muted-foreground">
          This site hosts the Splendor Kernel documentation.
        </p>
        <Link
          href="/docs"
          className="inline-flex rounded-full bg-fd-foreground px-5 py-2 text-sm font-semibold text-fd-background"
        >
          Go to documentation
        </Link>
      </div>
    </div>
  );
}
