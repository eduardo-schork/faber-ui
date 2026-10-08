import { cssVariable } from '../css-variable';

import { PALETTE } from './palette';

export const COLORS = {
  TEXT_PRIMARY: cssVariable('--faber-ui-color-text-primary', PALETTE.NEUTRAL_950),
  TEXT_SECONDARY: cssVariable('--faber-ui-color-text-secondary', PALETTE.NEUTRAL_700),
  TEXT_DISABLED: cssVariable('--faber-ui-color-text-disabled', PALETTE.NEUTRAL_500),
  BACKGROUND_PRIMARY: cssVariable('--faber-ui-color-background-primary', PALETTE.NEUTRAL_50),
  SURFACE_PRIMARY: cssVariable('--faber-ui-color-surface-primary', PALETTE.WHITE),
  BORDER_DEFAULT: cssVariable('--faber-ui-color-border-default', PALETTE.NEUTRAL_200),
  BORDER_STRONG: cssVariable('--faber-ui-color-border-strong', PALETTE.NEUTRAL_500),
  DISABLED_BACKGROUND: cssVariable('--faber-ui-color-disabled-background', PALETTE.NEUTRAL_200),
  FOCUS_RING: cssVariable('--faber-ui-color-focus-ring', PALETTE.OBSIDIAN_400),
  ERROR: cssVariable('--faber-ui-color-error', PALETTE.RED_400),
  /** The scrim behind a modal. It stays dark in every theme so the page recedes. */
  OVERLAY: cssVariable('--faber-ui-color-overlay', PALETTE.OVERLAY_400),

  PRIMARY_LIGHTEN_3: cssVariable('--faber-ui-color-primary-lighten-3', PALETTE.AMETHYST_100),
  PRIMARY_LIGHTEN_2: cssVariable('--faber-ui-color-primary-lighten-2', PALETTE.AMETHYST_200),
  PRIMARY_LIGHTEN_1: cssVariable('--faber-ui-color-primary-lighten-1', PALETTE.AMETHYST_300),
  PRIMARY: cssVariable('--faber-ui-color-primary', PALETTE.AMETHYST_400),
  PRIMARY_HOVER: cssVariable('--faber-ui-color-primary-hover', PALETTE.AMETHYST_500),
  PRIMARY_ACTIVE: cssVariable('--faber-ui-color-primary-active', PALETTE.AMETHYST_600),
  ON_PRIMARY: cssVariable('--faber-ui-color-on-primary', PALETTE.WHITE),
  PRIMARY_DARKEN_1: cssVariable('--faber-ui-color-primary-darken-1', PALETTE.AMETHYST_500),
  PRIMARY_DARKEN_2: cssVariable('--faber-ui-color-primary-darken-2', PALETTE.AMETHYST_600),

  ACCENT_LIGHTEN_3: cssVariable('--faber-ui-color-accent-lighten-3', PALETTE.OBSIDIAN_100),
  ACCENT_LIGHTEN_2: cssVariable('--faber-ui-color-accent-lighten-2', PALETTE.OBSIDIAN_200),
  ACCENT_LIGHTEN_1: cssVariable('--faber-ui-color-accent-lighten-1', PALETTE.OBSIDIAN_300),
  ACCENT: cssVariable('--faber-ui-color-accent', PALETTE.OBSIDIAN_400),
  ACCENT_HOVER: cssVariable('--faber-ui-color-accent-hover', PALETTE.OBSIDIAN_500),
  ACCENT_ACTIVE: cssVariable('--faber-ui-color-accent-active', PALETTE.OBSIDIAN_600),
  ON_ACCENT: cssVariable('--faber-ui-color-on-accent', PALETTE.WHITE),
  ACCENT_DARKEN_1: cssVariable('--faber-ui-color-accent-darken-1', PALETTE.OBSIDIAN_500),
  ACCENT_DARKEN_2: cssVariable('--faber-ui-color-accent-darken-2', PALETTE.OBSIDIAN_600),
} as const;

export type TColorTokenName = keyof typeof COLORS;
export type TColorTokenValue = (typeof COLORS)[TColorTokenName];
