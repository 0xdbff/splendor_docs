import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';
import { Geist, Syne } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.splendor-k.org'),
  title: {
    default: 'Splendor Kernel',
    template: '%s | Splendor Kernel',
  },
  description: 'Design-stage docs for the Splendor Kernel. Initial code push pending.',
  applicationName: 'Splendor Kernel',
  keywords: [
    'neuro-symbolic AI',
    'agent kernel',
    'self-managed agents',
    'distributed agent runtime',
    'multi-tenant agents',
    'agent safety enforcement',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Splendor Kernel',
    description: 'Design-stage kernel docs. Initial code push pending.',
    url: 'https://docs.splendor-k.org',
    siteName: 'Splendor Kernel',
    type: 'website',
    images: [
      {
        url: '/og/splendor-og.png',
        width: 1200,
        height: 630,
        alt: 'Splendor Kernel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Splendor Kernel',
    description: 'Design-stage kernel docs. Initial code push pending.',
    images: ['/og/splendor-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-fd-background text-fd-foreground antialiased">
        <RootProvider
          theme={{
            attribute: 'class',
            defaultTheme: 'dark',
            enableSystem: false,
          }}
          search={{
            enabled: false,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
