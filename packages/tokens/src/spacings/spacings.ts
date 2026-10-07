import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const SPACING_SCALE = {
  NONE: '0px',
  XXS: '4px',
  XS: '8px',
  SM: '12px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
  XXL: '48px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-spacing-<name>, <raw value>)`. */
export const SPACINGS = /* @__PURE__ */ createTokenVariables('spacing', SPACING_SCALE);

export type TSpacingTokenName = keyof typeof SPACINGS;
export type TSpacingTokenValue = (typeof SPACINGS)[TSpacingTokenName];
export type TSpacingScaleValue = (typeof SPACING_SCALE)[TSpacingTokenName];
