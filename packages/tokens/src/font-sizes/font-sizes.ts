export const FONT_SIZES = {
  XS: '12px',
  SM: '14px',
  MD: '16px',
  LG: '18px',
  XL: '20px',
  XXL: '24px',
  XXXL: '32px',
} as const;

export type TFontSizeTokenName = keyof typeof FONT_SIZES;
export type TFontSizeTokenValue = (typeof FONT_SIZES)[TFontSizeTokenName];
