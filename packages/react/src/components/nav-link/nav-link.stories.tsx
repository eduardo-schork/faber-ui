import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavLink } from './nav-link.ui';

const meta = {
  title: 'Atoms/NavLink',
  component: NavLink,
  parameters: { layout: 'centered' },
  args: { children: 'Components', href: '#' },
} satisfies Meta<typeof NavLink>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Current: TStory = { args: { current: true } };
