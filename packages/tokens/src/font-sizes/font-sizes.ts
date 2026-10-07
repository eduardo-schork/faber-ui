import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const FONT_SIZE_SCALE = {
  XS: '12px',
  SM: '14px',
  MD: '16px',
  LG: '18px',
  XL: '20px',
  XXL: '24px',
  XXXL: '32px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-font-size-<name>, <raw value>)`. */
export const FONT_SIZES = /* @__PURE__ */ createTokenVariables('font-size', FONT_SIZE_SCALE);

export type TFontSizeTokenName = keyof typeof FONT_SIZES;
export type TFontSizeTokenValue = (typeof FONT_SIZES)[TFontSizeTokenName];
export type TFontSizeScaleValue = (typeof FONT_SIZE_SCALE)[TFontSizeTokenName];
