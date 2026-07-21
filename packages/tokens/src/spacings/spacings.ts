export const SPACINGS = {
  NONE: '0px',
  XXS: '4px',
  XS: '8px',
  SM: '12px',
  MD: '16px',
  LG: '24px',
  XL: '32px',
  XXL: '48px',
} as const;

export type TSpacingTokenName = keyof typeof SPACINGS;
export type TSpacingTokenValue = (typeof SPACINGS)[TSpacingTokenName];
