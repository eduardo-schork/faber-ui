import type { Meta, StoryObj } from '@storybook/react-vite';
import { BORDER_WIDTHS, SIZES, SPACINGS } from '@faber-ui/tokens';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { IconButton } from './icon-button.ui';

const variants = Object.values(BUTTON_VARIANTS);
const sizes = Object.values(BUTTON_SIZES);
const colors = Object.values(BUTTON_COLORS);

const icon = (
  <svg aria-hidden="true" width={SIZES.XXS} height={SIZES.XXS} viewBox="0 0 18 18">
    <path
      d="M9 3v12M3 9h12"
      fill="none"
      stroke="currentColor"
      strokeWidth={BORDER_WIDTHS.DEFAULT}
    />
  </svg>
);

const meta = {
  title: 'Components/Actions/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Add item',
    children: icon,
    color: BUTTON_COLORS.PRIMARY,
    size: BUTTON_SIZES.MEDIUM,
    variant: BUTTON_VARIANTS.FILLED,
  },
  argTypes: {
    children: { control: false },
    color: { control: 'select', options: colors },
    size: { control: 'select', options: sizes },
    variant: { control: 'select', options: variants },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type TStory = StoryObj<typeof meta>;

const groupStyle = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: SPACINGS.MD,
} as const;

export const Playground: TStory = {};

export const Variants: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.LG }}>
      {colors.map((color) => (
        <div key={color} style={groupStyle}>
          {variants.map((variant) => (
            <IconButton
              key={variant}
              aria-label={`Add item using ${color} ${variant}`}
              color={color}
              variant={variant}
            >
              {icon}
            </IconButton>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes: TStory = {
  render: () => (
    <div style={groupStyle}>
      {sizes.map((size) => (
        <IconButton key={size} aria-label={`Add item using ${size} size`} size={size}>
          {icon}
        </IconButton>
      ))}
    </div>
  ),
};

export const States: TStory = {
  render: () => (
    <div style={groupStyle}>
      <IconButton aria-label="Add item" disabled>
        {icon}
      </IconButton>
      <IconButton aria-label="Adding item" loading>
        {icon}
      </IconButton>
    </div>
  ),
};
