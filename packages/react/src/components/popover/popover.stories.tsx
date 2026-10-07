import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { POPOVER_ALIGNMENTS, POPOVER_SIDES } from './popover.constants';
import { Popover } from './popover.ui';

const meta = {
  title: 'Molecules/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  args: {
    align: POPOVER_ALIGNMENTS.CENTER,
    children: <Button variant="outline">Share</Button>,
    content: 'Anyone with the link can view this project.',
    label: 'Share settings',
    side: POPOVER_SIDES.BOTTOM,
  },
  argTypes: {
    align: { control: 'select', options: Object.values(POPOVER_ALIGNMENTS) },
    children: { control: false },
    side: { control: 'select', options: Object.values(POPOVER_SIDES) },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
