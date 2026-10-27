import type { Metadata } from 'next';

export const docsUrl = 'https://docs.splendorkernel.org';
export const docsDescription =
  'Splendor Kernel documentation for governed AI agent loops, verified actions, explicit state, traces and replay. Explore setup, concepts and examples.';

export function docsMetadata(title: string, description: string, path: string): Metadata {
  const image = {
    url: `${docsUrl}/og/splendor-og.png`,
    width: 1200,
    height: 630,
    alt: 'Splendor Kernel documentation',
  };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      title,
      description,
      url: new URL(path, docsUrl).href,
      siteName: 'Splendor Kernel Documentation',
      locale: 'en_US',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
