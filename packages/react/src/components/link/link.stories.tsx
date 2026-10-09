import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';
import { Link } from './link.ui';

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  parameters: { layout: 'centered' },
  args: { children: 'Read the documentation', href: '#documentation' },
  argTypes: {
    size: { control: 'select', options: Object.values(TYPOGRAPHY_SIZES) },
    tone: { control: 'select', options: Object.values(TYPOGRAPHY_TONES) },
  },
} satisfies Meta<typeof Link>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Tones: TStory = {
  render: (args) => (
    <div style={{ display: 'grid', gap: SPACINGS.XS }}>
      {[TYPOGRAPHY_TONES.ACCENT, TYPOGRAPHY_TONES.PRIMARY, TYPOGRAPHY_TONES.SECONDARY].map(
        (tone) => (
          <Link key={tone} {...args} tone={tone}>
            {tone} link
          </Link>
        ),
      )}
    </div>
  ),
};
