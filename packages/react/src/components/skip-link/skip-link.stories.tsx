import type { Meta, StoryObj } from '@storybook/react-vite';

import { SkipLink } from './skip-link.ui';

const meta = {
  title: 'Components/Navigation/SkipLink',
  component: SkipLink,
  parameters: {
    docs: { description: { component: 'Press Tab inside the preview to reveal the link.' } },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
