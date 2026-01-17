import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/splendor-os/kernel',
    themeSwitch: {
      enabled: true,
      mode: 'light-dark',
    },
    links: [
      {
        type: 'main',
        text: 'Docs',
        url: '/docs',
      },
      {
        type: 'main',
        text: 'Design',
        url: '/docs/test',
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
