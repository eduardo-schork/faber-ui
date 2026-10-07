import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from './footer.ui';

const meta = {
  title: 'Molecules/Footer',
  component: Footer,
  args: { children: 'Faber UI is MIT licensed.' },
} satisfies Meta<typeof Footer>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
