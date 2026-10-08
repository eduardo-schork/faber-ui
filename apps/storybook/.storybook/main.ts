import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const workspaceSource = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  staticDirs: [
    '../public',
    {
      from: '../../../packages/fonts/node_modules/@fontsource-variable/plus-jakarta-sans/files',
      to: '/fonts',
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // The setup checklist is for a new Storybook; this one is a published reference.
  features: {
    sidebarOnboardingChecklist: false,
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      resolve: {
        dedupe: ['react', 'react-dom', 'styled-components'],
        alias: [
          {
            find: /^@faber-ui\/fonts$/,
            replacement: workspaceSource('../../../packages/fonts/src/index.ts'),
          },
          {
            find: /^@faber-ui\/icons$/,
            replacement: workspaceSource('../../../packages/icons/src/index.ts'),
          },
          {
            find: /^@faber-ui\/react$/,
            replacement: workspaceSource('../../../packages/react/src/index.ts'),
          },
          {
            find: /^@faber-ui\/themes$/,
            replacement: workspaceSource('../../../packages/themes/src/index.ts'),
          },
          {
            find: /^@faber-ui\/tokens$/,
            replacement: workspaceSource('../../../packages/tokens/src/index.ts'),
          },
        ],
      },
    }),
};

export default config;
