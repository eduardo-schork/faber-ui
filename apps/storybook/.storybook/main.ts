import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';

const workspaceSource = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../../../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) =>
    mergeConfig(config, {
      resolve: {
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
          {
            find: /^@faber-ui\/utilities$/,
            replacement: workspaceSource('../../../packages/utilities/src/index.ts'),
          },
        ],
      },
    }),
};

export default config;
