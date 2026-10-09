import { COLORS } from '../colors';
import { createTokenVariables } from '../token-variables/create-token-variables';

/**
 * Elevation, from a control that sits just above the page to a modal that floats over it. Each
 * level is a tight shadow under the edge plus a soft one that spreads with height, both in the
 * theme's `SHADOW` color, so a shadow deepens on its own in the dark theme.
 */
export const SHADOW_SCALE = {
  NONE: 'none',
  SM: `0px 1px 2px ${COLORS.SHADOW}`,
  MD: `0px 1px 2px ${COLORS.SHADOW}, 0px 6px 16px ${COLORS.SHADOW}`,
  LG: `0px 2px 6px ${COLORS.SHADOW}, 0px 16px 40px ${COLORS.SHADOW}`,
} as const;

/**
 * What styles consume: each entry is `var(--faber-ui-shadow-<name>, <shadow>)`. The stylesheet does
 * not declare these on `:root`, because a shadow resolved there would keep the root theme's color
 * inside a scoped theme.
 */
export const SHADOWS = /* @__PURE__ */ createTokenVariables('shadow', SHADOW_SCALE);

export type TShadowTokenName = keyof typeof SHADOWS;
export type TShadowTokenValue = (typeof SHADOWS)[TShadowTokenName];
export type TShadowScaleValue = (typeof SHADOW_SCALE)[TShadowTokenName];
