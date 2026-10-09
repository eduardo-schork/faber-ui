import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACING_SCALE } from '@faber-ui/tokens';

import { Box } from './box.ui';

const meta = {
  title: 'Components/Layout/Box',
  component: Box,
  parameters: { layout: 'centered' },
  args: { children: 'A block container with token padding.', padding: 'MD' },
  argTypes: { padding: { control: 'select', options: Object.keys(SPACING_SCALE) } },
} satisfies Meta<typeof Box>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const ResponsivePadding: TStory = {
  args: { padding: { MOBILE: 'SM', TABLET: 'XL' } },
};
