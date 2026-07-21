import type { Preview } from '@storybook/react-vite';
import '@faber-ui/themes/styles.css';
import { GlobalStyles } from '@faber-ui/themes';
import { createElement, Fragment } from 'react';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => createElement(Fragment, null, createElement(GlobalStyles), createElement(Story)),
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Atoms', 'Molecules', 'Organisms'],
      },
    },
  },
};

export default preview;
