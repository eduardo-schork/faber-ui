import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { AVATAR_SIZES } from './avatar.constants';
import { Avatar } from './avatar.ui';

const meta = {
  title: 'Components/Display/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  args: { alt: 'Eduardo Schork', fallback: 'ES', size: AVATAR_SIZES.MEDIUM },
  argTypes: { size: { control: 'select', options: Object.values(AVATAR_SIZES) } },
} satisfies Meta<typeof Avatar>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Sizes: TStory = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: SPACINGS.MD }}>
      {Object.values(AVATAR_SIZES).map((size) => (
        <Avatar key={size} alt={`${size} avatar`} fallback="ES" size={size} />
      ))}
    </div>
  ),
};
