import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { BADGE_COLORS } from './badge.constants';
import { Badge } from './badge.ui';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  args: { children: 'Stable', color: BADGE_COLORS.NEUTRAL },
  argTypes: { color: { control: 'select', options: Object.values(BADGE_COLORS) } },
} satisfies Meta<typeof Badge>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Colors: TStory = {
  render: () => (
    <div style={{ display: 'flex', gap: SPACINGS.XS }}>
      {Object.values(BADGE_COLORS).map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
};
