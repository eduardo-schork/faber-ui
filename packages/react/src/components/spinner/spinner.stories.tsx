import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { SPINNER_SIZES } from './spinner.constants';
import { Spinner } from './spinner.ui';

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  args: { label: 'Loading', size: SPINNER_SIZES.MEDIUM },
  argTypes: { size: { control: 'select', options: Object.values(SPINNER_SIZES) } },
} satisfies Meta<typeof Spinner>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Sizes: TStory = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: SPACINGS.MD }}>
      {Object.values(SPINNER_SIZES)
        .filter((size) => size !== SPINNER_SIZES.CURRENT)
        .map((size) => (
          <Spinner key={size} label={`Loading ${size}`} size={size} />
        ))}
    </div>
  ),
};
