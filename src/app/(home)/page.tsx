import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-28">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <div className="flex justify-center">
          <Image
            src="/partners/splendor.png"
            alt="Splendor"
            width={1050}
            height={300}
            priority
            className="h-auto w-80 transition dark:invert md:w-[28rem]"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-fd-muted-foreground">
            Documentation
          </p>
          <p className="mx-auto max-w-xl text-base text-fd-muted-foreground md:text-lg">
            Documentation for Splendor, a kernel-grade runtime for persistent,
            governable agent loops.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/docs/getting-started"
            className="inline-flex rounded-full bg-fd-foreground px-6 py-3 text-sm font-semibold text-fd-background"
          >
            Start locally
          </Link>
          <Link
            href="/docs/examples"
            className="inline-flex rounded-full border border-fd-border px-6 py-3 text-sm font-semibold"
          >
            View examples
          </Link>
        </div>
      </div>
    </div>
  );
}
