import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { SEGMENTED_CONTROL_SIZES } from './segmented-control.constants';
import { Segment, SegmentedControl } from './segmented-control.ui';

const meta = {
  title: 'Molecules/SegmentedControl',
  component: SegmentedControl,
  parameters: { layout: 'centered' },
  args: {
    children: null,
    label: 'Density',
    labelHidden: false,
    size: SEGMENTED_CONTROL_SIZES.MEDIUM,
  },
  argTypes: {
    children: { control: false },
    size: { control: 'select', options: Object.values(SEGMENTED_CONTROL_SIZES) },
  },
  render: (args) => (
    <SegmentedControl {...args}>
      <Segment name="playground-density" value="comfortable" defaultChecked>
        Comfortable
      </Segment>
      <Segment name="playground-density" value="compact">
        Compact
      </Segment>
      <Segment name="playground-density" value="dense" disabled>
        Dense
      </Segment>
    </SegmentedControl>
  ),
} satisfies Meta<typeof SegmentedControl>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Sizes: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.LG }}>
      {Object.values(SEGMENTED_CONTROL_SIZES).map((size) => (
        <SegmentedControl key={size} label={size} size={size}>
          <Segment name={`sizes-${size}`} value="light" defaultChecked>
            Light
          </Segment>
          <Segment name={`sizes-${size}`} value="dark">
            Dark
          </Segment>
          <Segment name={`sizes-${size}`} value="system">
            System
          </Segment>
        </SegmentedControl>
      ))}
    </div>
  ),
};
