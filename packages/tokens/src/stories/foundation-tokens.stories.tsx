import type { Meta, StoryObj } from '@storybook/react-vite';

import { ANIMATIONS } from '../animations';
import { BORDER_WIDTHS } from '../border-widths';
import { BREAKPOINTS } from '../breakpoints';
import { PALETTE } from '../colors';
import { FOCUS_RINGS } from '../focus-rings';
import { FONT_FAMILIES } from '../font-families';
import { FONT_SIZES } from '../font-sizes';
import { FONT_WEIGHTS } from '../font-weights';
import { LINE_HEIGHTS } from '../line-heights';
import { OPACITIES } from '../opacities';
import { RADII } from '../radii';
import { RELATIVE_SIZES } from '../relative-sizes';
import { SIZES } from '../sizes';
import { SPACINGS } from '../spacings';
import { TEXT_DECORATIONS } from '../text-decorations';

const meta = {
  title: 'Foundations/Tokens',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

type TStory = StoryObj<typeof meta>;

const listStyle = {
  display: 'grid',
  gap: SPACINGS.MD,
  margin: SPACINGS.NONE,
  padding: SPACINGS.NONE,
} as const;

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: SPACINGS.MD,
  minHeight: SIZES.MD,
} as const;

const labelStyle = {
  display: 'inline-block',
  flex: '0 0 160px',
  fontFamily: 'monospace',
} as const;

export const Typography: TStory = {
  render: () => (
    <div style={listStyle}>
      <div style={rowStyle}>
        <code style={labelStyle}>BASE</code>
        <span style={{ fontFamily: FONT_FAMILIES.BASE }}>Plus Jakarta Sans Variable</span>
      </div>

      <hr style={{ width: '100%' }} />

      {Object.entries(FONT_SIZES).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <span style={{ fontFamily: FONT_FAMILIES.BASE, fontSize: value }}>
            The quick brown fox jumps over the lazy dog.
          </span>
        </div>
      ))}

      <hr style={{ width: '100%' }} />

      {Object.entries(FONT_WEIGHTS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <span
            style={{ fontFamily: FONT_FAMILIES.BASE, fontSize: FONT_SIZES.LG, fontWeight: value }}
          >
            The quick brown fox jumps over the lazy dog.
          </span>
        </div>
      ))}

      <hr style={{ width: '100%' }} />

      {Object.entries(LINE_HEIGHTS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <span
            style={{
              maxWidth: 560,
              fontFamily: FONT_FAMILIES.BASE,
              fontSize: FONT_SIZES.MD,
              lineHeight: value,
            }}
          >
            The quick brown fox jumps over the lazy dog. Typography remains readable across multiple
            lines of content.
          </span>
        </div>
      ))}
    </div>
  ),
};

export const SpacingScale: TStory = {
  render: () => (
    <div style={listStyle}>
      {Object.entries(SPACINGS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <div
            style={{
              width: value,
              minWidth: value === SPACINGS.NONE ? BORDER_WIDTHS.DEFAULT : value,
              height: SIZES.XS,
              background: PALETTE.GREEN_400,
            }}
          />
          <span>{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const RadiusScale: TStory = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: SPACINGS.LG }}>
      {Object.entries(RADII).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: SIZES.XL,
              height: SIZES.XL,
              borderRadius: value,
              background: PALETTE.PURPLE_400,
            }}
          />
          <code>{name}</code>
          <div>{value}</div>
        </div>
      ))}
    </div>
  ),
};

export const BorderWidthScale: TStory = {
  render: () => (
    <div style={listStyle}>
      {Object.entries(BORDER_WIDTHS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <div style={{ width: 160, borderTop: `${value} solid ${PALETTE.GREEN_400}` }} />
          <span>{value}</span>
        </div>
      ))}
    </div>
  ),
};

export const SizeScale: TStory = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'end', flexWrap: 'wrap', gap: SPACINGS.LG }}>
      {Object.entries(SIZES).map(([name, value]) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: value,
              height: value,
              margin: `${SPACINGS.NONE} auto`,
              borderRadius: RADII.SM,
              background: PALETTE.GREEN_100,
            }}
          />
          <code>{name}</code>
          <div>{value}</div>
        </div>
      ))}
    </div>
  ),
};

export const ResponsiveBreakpoints: TStory = {
  render: () => (
    <div style={listStyle}>
      <p>
        BREAKPOINTS are mobile-first minimum-width thresholds. The mobile base does not require a
        media query.
      </p>
      {Object.entries(BREAKPOINTS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  ),
};

export const Motion: TStory = {
  render: () => (
    <div style={listStyle}>
      <p>
        Motion tokens keep interaction feedback consistent. Reduced-motion preferences remain a
        component-level responsibility.
      </p>
      {Object.entries(ANIMATIONS).map(([name, value]) => (
        <div key={name} style={rowStyle}>
          <code style={labelStyle}>{name}</code>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  ),
};

export const InteractionEffects: TStory = {
  render: () => (
    <div style={listStyle}>
      <p>
        Shared interaction tokens prevent focus, visibility, text-decoration, and relative sizing
        decisions from being duplicated inside components.
      </p>
      {Object.entries({ FOCUS_RINGS, OPACITIES, RELATIVE_SIZES, TEXT_DECORATIONS }).flatMap(
        ([group, tokens]) =>
          Object.entries(tokens).map(([name, value]) => (
            <div key={`${group}-${name}`} style={rowStyle}>
              <code style={labelStyle}>{`${group}.${name}`}</code>
              <strong>{value}</strong>
            </div>
          )),
      )}
    </div>
  ),
};
