import type { Meta, StoryObj } from '@storybook/react-vite';
import { THEME_MODES, ThemeProvider } from '@faber-ui/themes';
import { BORDER_WIDTHS, COLORS, SIZES, SPACINGS } from '@faber-ui/tokens';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import { Button } from './button.ui';

const variants = Object.values(BUTTON_VARIANTS);
const sizes = Object.values(BUTTON_SIZES);
const colors = Object.values(BUTTON_COLORS);

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    color: BUTTON_COLORS.PRIMARY,
    fullWidth: false,
    size: BUTTON_SIZES.MEDIUM,
    variant: BUTTON_VARIANTS.FILLED,
  },
  argTypes: {
    color: { control: 'select', options: colors },
    endIcon: { control: false },
    size: { control: 'select', options: sizes },
    startIcon: { control: false },
    variant: { control: 'select', options: variants },
  },
} satisfies Meta<typeof Button>;

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
            <Button key={variant} color={color} variant={variant}>
              {variant}
            </Button>
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
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

export const FullWidth: TStory = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <Button fullWidth>Continue</Button>
    </div>
  ),
};

export const WithIcons: TStory = {
  render: () => (
    <div style={groupStyle}>
      <Button
        startIcon={
          <svg aria-hidden="true" width={SIZES.XXS} height={SIZES.XXS} viewBox="0 0 16 16">
            <path
              d="M13 8H3m4-4L3 8l4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth={BORDER_WIDTHS.DEFAULT}
            />
          </svg>
        }
      >
        Go back
      </Button>
      <Button
        endIcon={
          <svg aria-hidden="true" width={SIZES.XXS} height={SIZES.XXS} viewBox="0 0 16 16">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth={BORDER_WIDTHS.DEFAULT}
            />
          </svg>
        }
        variant={BUTTON_VARIANTS.OUTLINE}
      >
        Continue
      </Button>
    </div>
  ),
};

export const Disabled: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.LG }}>
      {colors.map((color) => (
        <div key={color} style={groupStyle}>
          {variants.map((variant) => (
            <Button key={variant} color={color} disabled variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Loading: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.LG }}>
      {colors.map((color) => (
        <div key={color} style={groupStyle}>
          {variants.map((variant) => (
            <Button key={variant} color={color} loading variant={variant}>
              Saving changes
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Themes: TStory = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
      {([THEME_MODES.LIGHT, THEME_MODES.DARK] as const).map((mode) => (
        <ThemeProvider key={mode} mode={mode}>
          <section
            style={{
              display: 'grid',
              gap: SPACINGS.LG,
              minHeight: 240,
              padding: SPACINGS.XL,
              color: COLORS.TEXT_PRIMARY,
              background: COLORS.BACKGROUND_PRIMARY,
            }}
          >
            <strong>{mode} theme</strong>
            <div style={groupStyle}>
              {variants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant}
                </Button>
              ))}
            </div>
          </section>
        </ThemeProvider>
      ))}
    </div>
  ),
};
