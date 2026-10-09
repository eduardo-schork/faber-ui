import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { TOAST_COLORS } from './toast.constants';
import { Toast } from './toast.ui';

const meta = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  args: {
    children: 'Your changes are live.',
    color: TOAST_COLORS.NEUTRAL,
    onDismiss: () => undefined,
    title: 'Saved',
  },
  argTypes: { color: { control: 'select', options: Object.values(TOAST_COLORS) } },
} satisfies Meta<typeof Toast>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Colors: TStory = {
  render: (args) => (
    <div style={{ display: 'grid', gap: SPACINGS.XS }}>
      {Object.values(TOAST_COLORS).map((color) => (
        <Toast key={color} {...args} color={color} title={color} />
      ))}
    </div>
  ),
};
