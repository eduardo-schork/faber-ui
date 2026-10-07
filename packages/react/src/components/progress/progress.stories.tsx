import type { Meta, StoryObj } from '@storybook/react-vite';

import { Progress } from './progress.ui';

const meta = {
  title: 'Atoms/Progress',
  component: Progress,
  args: { label: 'Upload', max: 100, value: 40 },
} satisfies Meta<typeof Progress>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Indeterminate: TStory = { args: { label: 'Syncing', value: undefined } };
