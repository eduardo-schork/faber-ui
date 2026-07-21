export const BORDER_WIDTHS = {
  DEFAULT: '1px',
  STRONG: '2px',
} as const;

export type TBorderWidthTokenName = keyof typeof BORDER_WIDTHS;
export type TBorderWidthTokenValue = (typeof BORDER_WIDTHS)[TBorderWidthTokenName];
