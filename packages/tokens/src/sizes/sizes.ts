export const SIZES = {
  XXS: '16px',
  XS: '24px',
  SM: '32px',
  MD: '40px',
  LG: '48px',
  XL: '64px',
  XXL: '80px',
} as const;

export type TSizeTokenName = keyof typeof SIZES;
export type TSizeTokenValue = (typeof SIZES)[TSizeTokenName];
