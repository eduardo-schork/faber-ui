import reactPackage from '../../../../packages/react/package.json';

export const SITE_LINKS = {
  NPM: 'https://www.npmjs.com/package/@faber-ui/react',
  REPOSITORY: 'https://github.com/eduardo-schork/faber-ui',
  WEBSITE: 'https://faberui.vercel.app',
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

// Read from the package so a release never leaves the site showing an old version.
export const PACKAGE_VERSION = reactPackage.version;

export const getStorybookDocsUrl = (docsId: string) =>
  `${SITE_LINKS.STORYBOOK}/?path=/docs/${docsId}--docs`;

export const DOC_PAGES = [
  { href: '/docs', label: 'Get started' },
  { href: '/docs/components', label: 'Components' },
  { href: '/docs/foundations', label: 'Foundations' },
  { href: '/docs/customization', label: 'Customization' },
] as const;
