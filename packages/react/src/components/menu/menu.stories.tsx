import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { MENU_ALIGNMENTS, MENU_ITEM_COLORS } from './menu.constants';
import { Menu, MenuItem, MenuLabel, MenuSeparator } from './menu.ui';

const meta = {
  title: 'Molecules/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
  args: {
    align: MENU_ALIGNMENTS.START,
    children: null,
    trigger: <Button variant="outline">Options</Button>,
  },
  argTypes: {
    align: { control: 'select', options: Object.values(MENU_ALIGNMENTS) },
    children: { control: false },
    trigger: { control: false },
  },
  render: (args) => (
    <Menu {...args}>
      <MenuLabel>Project</MenuLabel>
      <MenuItem>Rename</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem disabled>Transfer</MenuItem>
      <MenuSeparator />
      <MenuItem color={MENU_ITEM_COLORS.ERROR}>Delete</MenuItem>
    </Menu>
  ),
} satisfies Meta<typeof Menu>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
