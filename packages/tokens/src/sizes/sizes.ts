import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const SIZE_SCALE = {
  XXS: '16px',
  XS: '24px',
  SM: '32px',
  MD: '40px',
  LG: '48px',
  XL: '64px',
  XXL: '80px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-size-<name>, <raw value>)`. */
export const SIZES = /* @__PURE__ */ createTokenVariables('size', SIZE_SCALE);

export type TSizeTokenName = keyof typeof SIZES;
export type TSizeTokenValue = (typeof SIZES)[TSizeTokenName];
export type TSizeScaleValue = (typeof SIZE_SCALE)[TSizeTokenName];
