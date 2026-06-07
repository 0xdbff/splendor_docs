import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-4xl space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-fd-muted-foreground">
            Governed agent runtime
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Splendor makes autonomous agent loops traceable, governable, and safe to replay.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-fd-muted-foreground md:text-lg">
            A kernel-grade runtime substrate for explicit state, verified action
            boundaries, append-only traces, scoped delegation, quotas, governance,
            and replay on Unix-like systems.
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

        <div className="grid gap-3 text-left md:grid-cols-3">
          {[
            ['Verified actions', 'Side effects pass through the gateway and verifier chain before adapters execute.'],
            ['Explicit state', 'Runs commit versioned state nodes with trace linkage and replay evidence.'],
            ['Safe replay', 'Replay is inspect-only by default and does not repeat side effects.'],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-fd-border bg-fd-card p-5">
              <h2 className="font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-fd-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
