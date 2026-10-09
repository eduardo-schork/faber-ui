import type { Preview } from '@storybook/react-vite';
import '@faber-ui/themes/styles.css';
import { GlobalStyles } from '@faber-ui/themes';
import { createElement, Fragment } from 'react';

import { FABER_THEME } from './faber-theme';

// Read as a property value, before Storybook swaps the method for a getter.
const nativeFocus: unknown = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'focus')?.value;
let focusGuarded = false;

/**
 * Storybook 10.5 replaces `HTMLElement.prototype.focus` with a getter the first time a story
 * loads. That getter reads `this.ownerDocument`, which throws "Illegal invocation" when the
 * property is read from the prototype itself, and the docs blocks do exactly that the first time
 * they render. Without this guard, opening a docs page after a story shows that error instead of
 * the page. The guard answers the read from the prototype with the native method and leaves
 * every other read and write to Storybook.
 */
const guardFocusGetter = () => {
  const descriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'focus');

  if (focusGuarded || descriptor?.get === undefined) {
    return;
  }

  Object.defineProperty(HTMLElement.prototype, 'focus', {
    configurable: true,
    get(this: HTMLElement) {
      return this === HTMLElement.prototype ? nativeFocus : (descriptor.get?.call(this) as unknown);
    },
    set(this: HTMLElement, value: unknown) {
      descriptor.set?.call(this, value);
    },
  });
  focusGuarded = true;
};

const preview: Preview = {
  // Project loaders run after the Storybook loader that installs the getter.
  loaders: [guardFocusGetter],
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
      // Storybook copies the source of this function into the manager as plain JavaScript, so it
      // carries no type annotations and reads nothing declared outside it. The first entry is the
      // page Storybook opens on.
      /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return -- untyped by necessity, see above */
      // @ts-expect-error -- the parameters cannot be annotated, see above
      storySort: (first, second) => {
        // The order of the children of each folder; anything not listed sorts by name after it.
        const ORDER = new Map([
          ['', ['Introduction', 'Foundations', 'Components']],
          ['Introduction', ['Overview', 'Getting Started', 'Forms']],
          [
            'Foundations',
            ['Design Tokens', 'Colors', 'Theming', 'Typography', 'Composition', 'Icons'],
          ],
          [
            'Components',
            [
              'Overview',
              'Actions',
              'Navigation',
              'Forms',
              'Layout',
              'Typography',
              'Display',
              'Feedback',
              'Overlays',
              'Utility',
            ],
          ],
        ]);
        const firstPath = first.title.split('/');
        const secondPath = second.title.split('/');

        for (let depth = 0; depth < Math.max(firstPath.length, secondPath.length); depth += 1) {
          const firstSegment = firstPath[depth];
          const secondSegment = secondPath[depth];

          if (firstSegment !== secondSegment) {
            // A page sorts before the folders next to it.
            if (firstSegment === undefined || secondSegment === undefined) {
              return firstSegment === undefined ? -1 : 1;
            }

            const ranks = ORDER.get(depth === 0 ? '' : firstPath[depth - 1]) ?? [];
            const firstRank = ranks.indexOf(firstSegment);
            const secondRank = ranks.indexOf(secondSegment);

            if (firstRank !== secondRank) {
              return firstRank === -1 ? 1 : secondRank === -1 ? -1 : firstRank - secondRank;
            }

            return firstSegment.localeCompare(secondSegment);
          }
        }

        // Inside one component: the docs page, then the stories in the order they are written.
        return (first.type === 'docs' ? 0 : 1) - (second.type === 'docs' ? 0 : 1);
      },
      /* eslint-enable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return */
    },
  },
};

export default preview;
