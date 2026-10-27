import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { docsUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set(['/', ...source.getPages().map((page) => page.url)]);
  return [...paths].map((path) => ({ url: new URL(path, docsUrl).href }));
}
