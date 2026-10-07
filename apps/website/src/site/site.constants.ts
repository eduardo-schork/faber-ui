export const SITE_LINKS = {
  REPOSITORY: 'https://github.com/eduardo-schork/faber-ui',
  // The published site sets this to the hosted Storybook; locally it is the development server.
  STORYBOOK: process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'http://localhost:6006',
} as const;

export const STORAGE_KEYS = {
  MATERIAL: 'faber-ui-website-material',
  THEME: 'faber-ui-website-theme',
} as const;

export const PREFERENCE_ATTRIBUTES = {
  MATERIAL: 'data-material',
  THEME: 'data-theme',
} as const;

export const PACKAGE_VERSION = '0.0.0';

export const getStorybookDocsUrl = (docsId: string) =>
  `${SITE_LINKS.STORYBOOK}/?path=/docs/${docsId}--docs`;

export const DOC_PAGES = [
  { href: '/docs', label: 'Get started' },
  { href: '/docs/components', label: 'Components' },
  { href: '/docs/foundations', label: 'Foundations' },
  { href: '/docs/theming', label: 'Theming' },
  { href: '/docs/composition', label: 'Composition' },
  { href: '/docs/playground', label: 'Playground' },
] as const;
