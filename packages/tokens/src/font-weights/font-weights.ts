export const FONT_WEIGHTS = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
} as const;

export type TFontWeightTokenName = keyof typeof FONT_WEIGHTS;
export type TFontWeightTokenValue = (typeof FONT_WEIGHTS)[TFontWeightTokenName];
