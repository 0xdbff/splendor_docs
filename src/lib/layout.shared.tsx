import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/splendor-os/kernel',
    themeSwitch: {
      enabled: true,
    },
    links: [
      {
        type: 'main',
        text: 'Docs',
        url: '/docs',
      },
      {
        type: 'main',
        text: 'Examples',
        url: '/docs/examples',
      },
      {
        type: 'main',
        text: 'Operations',
        url: '/docs/operations',
      },
      {
        type: 'main',
        text: 'GitHub',
        url: 'https://github.com/splendor-os/kernel',
      },
    ],
    nav: {
      title: (
        <span
          className="text-2xl font-semibold tracking-tight"
          style={{ fontFamily: 'Syne, var(--font-geist-sans)' }}
        >
          Splendor
        </span>
      ),
      url: '/',
      transparentMode: 'top',
    },
  };
}
