import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { ALERT_COLORS } from './alert.constants';
import { Alert } from './alert.ui';

const meta = {
  title: 'Atoms/Alert',
  component: Alert,
  args: {
    children: 'APIs may change before version 1.0.',
    color: ALERT_COLORS.NEUTRAL,
    title: 'Early release',
  },
  argTypes: { color: { control: 'select', options: Object.values(ALERT_COLORS) } },
} satisfies Meta<typeof Alert>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Colors: TStory = {
  render: (args) => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      {Object.values(ALERT_COLORS).map((color) => (
        <Alert key={color} {...args} color={color} title={color} />
      ))}
    </div>
  ),
};

export const BodyOnly: TStory = { args: { title: undefined } };
