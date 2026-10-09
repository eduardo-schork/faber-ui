import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { LinkButton } from './link-button.ui';

const meta = {
  title: 'Components/Navigation/LinkButton',
  component: LinkButton,
  parameters: { layout: 'centered' },
  args: {
    children: 'Get started',
    color: BUTTON_COLORS.PRIMARY,
    href: '#get-started',
    size: BUTTON_SIZES.MEDIUM,
    variant: BUTTON_VARIANTS.FILLED,
  },
  argTypes: {
    color: { control: 'select', options: Object.values(BUTTON_COLORS) },
    size: { control: 'select', options: Object.values(BUTTON_SIZES) },
    variant: { control: 'select', options: Object.values(BUTTON_VARIANTS) },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Variants: TStory = {
  render: (args) => (
    <div style={{ display: 'grid', gap: SPACINGS.SM }}>
      {Object.values(BUTTON_COLORS).map((color) => (
        <div key={color} style={{ display: 'flex', gap: SPACINGS.SM }}>
          {Object.values(BUTTON_VARIANTS).map((variant) => (
            <LinkButton key={variant} {...args} color={color} variant={variant}>
              {variant}
            </LinkButton>
          ))}
        </div>
      ))}
    </div>
  ),
};
