import { describe, expect, it } from 'vitest';

import { DARK_THEME } from './dark-theme';
import { LIGHT_THEME } from './light-theme';
import type { TTheme } from './theme.types';

type TThemeRole = keyof TTheme;
type TRgb = readonly [number, number, number];

const AA_TEXT = 4.5;
const AA_NON_TEXT = 3;

const parseColor = (value: string): TRgb => {
  if (value.startsWith('#')) {
    const channel = (start: number) => Number.parseInt(value.slice(start, start + 2), 16) / 255;

    return [channel(1), channel(3), channel(5)];
  }

  const [hue = 0, saturation = 0, lightness = 0] = Array.from(
    value.matchAll(/[\d.]+/gu),
    ([number]) => Number(number),
  );
  const s = saturation / 100;
  const l = lightness / 100;
  const chroma = s * Math.min(l, 1 - l);
  const channel = (offset: number) => {
    const k = (offset + hue / 30) % 12;

    return l - chroma * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };

  return [channel(0), channel(8), channel(4)];
};

const luminance = (color: TRgb) => {
  const [red, green, blue] = color.map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  ) as unknown as TRgb;

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

const contrast = (theme: TTheme, foreground: TThemeRole, background: TThemeRole) => {
  const [lighter, darker] = [
    luminance(parseColor(theme[foreground])),
    luminance(parseColor(theme[background])),
  ].sort((first, second) => second - first) as [number, number];

  return (lighter + 0.05) / (darker + 0.05);
};

const SURFACES = ['BACKGROUND_PRIMARY', 'SURFACE_PRIMARY'] as const;
const TEXT_ROLES = ['TEXT_PRIMARY', 'TEXT_SECONDARY', 'ERROR', 'PRIMARY', 'ACCENT'] as const;
const FILL_PAIRS = [
  ['ON_PRIMARY', 'PRIMARY'],
  ['ON_PRIMARY', 'PRIMARY_HOVER'],
  ['ON_PRIMARY', 'PRIMARY_ACTIVE'],
  ['ON_ACCENT', 'ACCENT'],
  ['ON_ACCENT', 'ACCENT_HOVER'],
  ['ON_ACCENT', 'ACCENT_ACTIVE'],
] as const;
const NON_TEXT_ROLES = ['BORDER_STRONG', 'FOCUS_RING'] as const;

describe.each([
  ['light', LIGHT_THEME],
  ['dark', DARK_THEME],
] as const)('%s theme contrast', (_name, theme) => {
  it('SHOULD keep text readable on the background and surface roles', () => {
    for (const surface of SURFACES) {
      for (const role of TEXT_ROLES) {
        expect(contrast(theme, role, surface), `${role} on ${surface}`).toBeGreaterThanOrEqual(
          AA_TEXT,
        );
      }
    }
  });

  it('SHOULD keep text readable on primary and accent fills in every state', () => {
    for (const [foreground, background] of FILL_PAIRS) {
      expect(
        contrast(theme, foreground, background),
        `${foreground} on ${background}`,
      ).toBeGreaterThanOrEqual(AA_TEXT);
    }
  });

  it('SHOULD keep control borders and the focus ring visible', () => {
    for (const surface of SURFACES) {
      for (const role of NON_TEXT_ROLES) {
        expect(contrast(theme, role, surface), `${role} on ${surface}`).toBeGreaterThanOrEqual(
          AA_NON_TEXT,
        );
      }
    }
  });
});
