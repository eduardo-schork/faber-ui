import type { Preview } from '@storybook/react-vite';
import '@faber-ui/themes/styles.css';
import { GlobalStyles } from '@faber-ui/themes';
import { createElement, Fragment } from 'react';

import { FABER_THEME } from './faber-theme';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => createElement(Fragment, null, createElement(GlobalStyles), createElement(Story)),
  ],
  parameters: {
    docs: {
      theme: FABER_THEME,
    },
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
        // The first entry is the page Storybook opens on.
        order: [
          'Introduction',
          ['Overview', 'Getting Started', 'Forms'],
          'Foundations',
          [
            'Design Tokens',
            'Theming Guide',
            'Typography Guide',
            'Composition Guide',
            'Icons Guide',
          ],
          'Components',
          ['Overview'],
        ],
      },
    },
  },
};

export default preview;
