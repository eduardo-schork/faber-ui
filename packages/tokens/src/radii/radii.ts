import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const RADIUS_SCALE = {
  NONE: '0px',
  XS: '2px',
  SM: '4px',
  MD: '8px',
  LG: '12px',
  XL: '16px',
  FULL: '9999px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-radius-<name>, <raw value>)`. */
export const RADII = /* @__PURE__ */ createTokenVariables('radius', RADIUS_SCALE);

export type TRadiusTokenName = keyof typeof RADII;
export type TRadiusTokenValue = (typeof RADII)[TRadiusTokenName];
export type TRadiusScaleValue = (typeof RADIUS_SCALE)[TRadiusTokenName];
