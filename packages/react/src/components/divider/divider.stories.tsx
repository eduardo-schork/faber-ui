import type { Meta, StoryObj } from '@storybook/react-vite';
import { SIZES, SPACINGS } from '@faber-ui/tokens';

import { DIVIDER_ORIENTATIONS } from './divider.constants';
import { Divider } from './divider.ui';

const meta = {
  title: 'Components/Layout/Divider',
  component: Divider,
  parameters: { layout: 'centered' },
  argTypes: {
    orientation: { control: 'select', options: Object.values(DIVIDER_ORIENTATIONS) },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Horizontal: TStory = {
  render: () => <Divider style={{ width: SIZES.XXL }} />,
};

export const Vertical: TStory = {
  render: () => (
    <div style={{ display: 'flex', gap: SPACINGS.MD, height: SIZES.LG }}>
      <span>Before</span>
      <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} />
      <span>After</span>
    </div>
  ),
};
