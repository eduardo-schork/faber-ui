import type { Meta, StoryObj } from '@storybook/react-vite';

import { VisuallyHidden } from './visually-hidden.ui';

const meta = {
  title: 'Atoms/VisuallyHidden',
  component: VisuallyHidden,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const AccessibleLabel: TStory = {
  render: () => (
    <button type="button">
      <span aria-hidden="true">✦</span>
      <VisuallyHidden>Create item</VisuallyHidden>
    </button>
  ),
};

export const FocusableSkipLink: TStory = {
  render: () => (
    <VisuallyHidden focusable>
      <a href="#storybook-root">Skip to Storybook canvas</a>
    </VisuallyHidden>
  ),
};
