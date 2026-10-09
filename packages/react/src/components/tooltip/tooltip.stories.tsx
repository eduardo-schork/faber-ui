import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { TOOLTIP_SIDES } from './tooltip.constants';
import { Tooltip } from './tooltip.ui';

const meta = {
  title: 'Components/Overlays/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  args: {
    children: <Button variant="outline">Hover or focus me</Button>,
    content: 'Copies the link to the clipboard',
    side: TOOLTIP_SIDES.TOP,
  },
  argTypes: {
    children: { control: false },
    side: { control: 'select', options: Object.values(TOOLTIP_SIDES) },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Open: TStory = { args: { open: true } };
