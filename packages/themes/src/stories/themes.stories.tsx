import type { Meta, StoryObj } from '@storybook/react-vite';
import { BORDER_WIDTHS, COLORS, FONT_WEIGHTS, RADII, SPACINGS } from '@faber-ui/tokens';

import { ThemeProvider } from '../theme-provider';
import { THEME_MODES } from '../theme';

const meta = {
  title: 'Foundations/Themes',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type TStory = StoryObj<typeof meta>;

type TThemePreviewProps = {
  readonly title: string;
};

function ThemePreview({ title }: TThemePreviewProps) {
  const states = [
    ['Default', COLORS.PRIMARY, COLORS.ON_PRIMARY],
    ['Hover', COLORS.PRIMARY_HOVER, COLORS.ON_PRIMARY],
    ['Active', COLORS.PRIMARY_ACTIVE, COLORS.ON_PRIMARY],
    ['Accent', COLORS.ACCENT, COLORS.ON_ACCENT],
  ] as const;

  return (
    <section
      style={{
        display: 'grid',
        gap: SPACINGS.LG,
        minWidth: 280,
        padding: SPACINGS.XL,
        border: `${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT}`,
        borderRadius: RADII.LG,
        color: COLORS.TEXT_PRIMARY,
        background: COLORS.BACKGROUND_PRIMARY,
      }}
    >
      <header>
        <h2 style={{ margin: SPACINGS.NONE }}>{title}</h2>
        <p style={{ marginBottom: SPACINGS.NONE, color: COLORS.TEXT_SECONDARY }}>
          Primary, secondary, disabled, surface, and interaction colors.
        </p>
      </header>

      <div
        style={{
          padding: SPACINGS.LG,
          border: `${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT}`,
          borderRadius: RADII.MD,
          background: COLORS.SURFACE_PRIMARY,
        }}
      >
        <strong>Elevated surface</strong>
        <p style={{ marginBottom: SPACINGS.NONE, color: COLORS.TEXT_SECONDARY }}>
          Secondary text creates hierarchy without reducing readability.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: SPACINGS.SM }}>
        {states.map(([label, background, color]) => (
          <span
            key={label}
            style={{
              padding: `${SPACINGS.XS} ${SPACINGS.MD}`,
              borderRadius: RADII.MD,
              color,
              background,
              fontWeight: FONT_WEIGHTS.SEMIBOLD,
            }}
          >
            {label}
          </span>
        ))}
        <span
          style={{
            padding: `${SPACINGS.XS} ${SPACINGS.MD}`,
            borderRadius: RADII.MD,
            color: COLORS.TEXT_DISABLED,
            background: COLORS.DISABLED_BACKGROUND,
          }}
        >
          Disabled
        </span>
      </div>
    </section>
  );
}

export const SideBySide: TStory = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: SPACINGS.LG,
      }}
    >
      <ThemeProvider mode={THEME_MODES.LIGHT}>
        <ThemePreview title="Light theme" />
      </ThemeProvider>
      <ThemeProvider mode={THEME_MODES.DARK}>
        <ThemePreview title="Dark theme" />
      </ThemeProvider>
    </div>
  ),
};
