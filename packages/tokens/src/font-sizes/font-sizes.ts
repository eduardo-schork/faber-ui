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
  /* Display sizes are for page and section titles, not for running text. */
  DISPLAY_SM: '40px',
  DISPLAY_MD: '64px',
  DISPLAY_LG: '96px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-font-size-<name>, <raw value>)`. */
export const FONT_SIZES = /* @__PURE__ */ createTokenVariables('font-size', FONT_SIZE_SCALE);

/** How fast each display size grows with the viewport width before it reaches its token. */
export const FONT_SIZE_FLUID_RATES = {
  DISPLAY_SM: '3.4vw',
  DISPLAY_MD: '5vw',
  DISPLAY_LG: '7.2vw',
} as const;

export type TFontSizeTokenName = keyof typeof FONT_SIZES;
export type TFontSizeTokenValue = (typeof FONT_SIZES)[TFontSizeTokenName];
export type TFontSizeScaleValue = (typeof FONT_SIZE_SCALE)[TFontSizeTokenName];
