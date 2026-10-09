import type { Meta, StoryObj } from '@storybook/react-vite';

import { BORDER_WIDTHS } from '../border-widths';
import { RADII } from '../radii';
import { SIZES } from '../sizes';
import { SPACINGS } from '../spacings';
import { COLORS } from './colors';
import { PALETTE } from './palette';

const meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type TStory = StoryObj<typeof meta>;

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: SPACINGS.MD,
} as const;

const swatchStyle = {
  minHeight: `calc(${SIZES.XXL} + ${SPACINGS.MD})`,
  border: `${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT}`,
  borderRadius: RADII.MD,
} as const;

const scaleStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(120px, 1fr)',
  overflow: 'auto',
} as const;

const scaleFamilies = {
  Neutral: [
    ['NEUTRAL_50', PALETTE.NEUTRAL_50],
    ['NEUTRAL_100', PALETTE.NEUTRAL_100],
    ['NEUTRAL_200', PALETTE.NEUTRAL_200],
    ['NEUTRAL_300', PALETTE.NEUTRAL_300],
    ['NEUTRAL_400', PALETTE.NEUTRAL_400],
    ['NEUTRAL_500', PALETTE.NEUTRAL_500],
    ['NEUTRAL_600', PALETTE.NEUTRAL_600],
    ['NEUTRAL_700', PALETTE.NEUTRAL_700],
    ['NEUTRAL_800', PALETTE.NEUTRAL_800],
    ['NEUTRAL_900', PALETTE.NEUTRAL_900],
    ['NEUTRAL_950', PALETTE.NEUTRAL_950],
  ],
  Primary: [
    ['PRIMARY_LIGHTEN_3', COLORS.PRIMARY_LIGHTEN_3],
    ['PRIMARY_LIGHTEN_2', COLORS.PRIMARY_LIGHTEN_2],
    ['PRIMARY_LIGHTEN_1', COLORS.PRIMARY_LIGHTEN_1],
    ['PRIMARY', COLORS.PRIMARY],
    ['PRIMARY_DARKEN_1', COLORS.PRIMARY_DARKEN_1],
    ['PRIMARY_DARKEN_2', COLORS.PRIMARY_DARKEN_2],
  ],
  Accent: [
    ['ACCENT_LIGHTEN_3', COLORS.ACCENT_LIGHTEN_3],
    ['ACCENT_LIGHTEN_2', COLORS.ACCENT_LIGHTEN_2],
    ['ACCENT_LIGHTEN_1', COLORS.ACCENT_LIGHTEN_1],
    ['ACCENT', COLORS.ACCENT],
    ['ACCENT_DARKEN_1', COLORS.ACCENT_DARKEN_1],
    ['ACCENT_DARKEN_2', COLORS.ACCENT_DARKEN_2],
  ],
} as const;

export const BrandScales: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.XL }}>
      {Object.entries(scaleFamilies).map(([family, tokens]) => (
        <section key={family}>
          <h2>{family}</h2>
          <div style={scaleStyle}>
            {tokens.map(([name, value]) => (
              <article key={name}>
                <div style={{ ...swatchStyle, background: value }} />
                <strong>{name}</strong>
                <div>{value}</div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

export const PrimitivePalette: TStory = {
  render: () => (
    <div style={gridStyle}>
      {Object.entries(PALETTE).map(([name, value]) => (
        <article key={name}>
          <div style={{ ...swatchStyle, background: value }} />
          <strong>{name}</strong>
          <div>{value}</div>
        </article>
      ))}
    </div>
  ),
};

export const SemanticColors: TStory = {
  render: () => (
    <div style={gridStyle}>
      {Object.entries(COLORS).map(([name, value]) => (
        <article key={name}>
          <div style={{ ...swatchStyle, background: value }} />
          <strong>{name}</strong>
          <div>{value}</div>
        </article>
      ))}
    </div>
  ),
};
