import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { Switch } from './switch.ui';

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  args: { label: 'Enable notifications', name: 'notifications' },
} satisfies Meta<typeof Switch>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const States: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Unavailable" error="This setting cannot be changed." />
    </div>
  ),
};
