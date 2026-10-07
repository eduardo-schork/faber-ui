import type { Meta, StoryObj } from '@storybook/react-vite';
import { SIZES, SPACINGS } from '@faber-ui/tokens';

import { Skeleton } from './skeleton.ui';

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  args: { animated: true },
} satisfies Meta<typeof Skeleton>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {
  render: (args) => <Skeleton {...args} style={{ width: '280px' }} />,
};

export const ContentPlaceholder: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.SM, width: '320px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: SPACINGS.SM }}>
        <Skeleton circle />
        <div style={{ display: 'grid', gap: SPACINGS.XS, flex: 1 }}>
          <Skeleton />
          <Skeleton style={{ width: SIZES.XXL }} />
        </div>
      </div>
      <Skeleton style={{ minHeight: SIZES.XL }} />
    </div>
  ),
};
