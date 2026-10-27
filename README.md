# Splendor Docs Site

Public documentation site for Splendor, the governed runtime substrate for
autonomous agent loops. The site is built with Next.js and Fumadocs.

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Checks

```bash
npm run types:check
npm run lint
npm run build
```

## Search discovery

`src/lib/seo.ts` defines the canonical documentation host, `https://docs.splendorkernel.org`.
Each document declares its own canonical URL and matching search/social metadata.
Example and reference titles include their section so identically named topics remain distinguishable.
`/sitemap.xml` is generated from the Fumadocs page registry; `/robots.txt` advertises it.
Update the registry and document frontmatter rather than maintaining a second URL list.

The Cloudflare adapter is pinned to the installed-compatible 1.16.3 release for Next 16.1.5;
newer adapter releases require a coordinated Next.js upgrade. Run all checks above when changing either dependency.

## Content standard

Public pages should describe stable user-facing behavior, examples, concepts, and
safe boundaries. Do not publish internal implementation rules, issue workflow,
internal QA evidence, PR/release process notes, or production and certification
claims that the kernel repository does not support.
