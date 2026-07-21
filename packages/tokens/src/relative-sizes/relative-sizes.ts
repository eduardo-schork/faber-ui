export const RELATIVE_SIZES = {
  CURRENT_FONT: '1em',
} as const;

export type TRelativeSizeTokenName = keyof typeof RELATIVE_SIZES;
export type TRelativeSizeTokenValue = (typeof RELATIVE_SIZES)[TRelativeSizeTokenName];
