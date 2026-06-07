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

## Content standard

Public pages should describe stable user-facing behavior, examples, concepts, and
safe boundaries. Do not publish internal implementation rules, issue workflow,
internal QA evidence, PR/release process notes, or production and certification
claims that the kernel repository does not support.
