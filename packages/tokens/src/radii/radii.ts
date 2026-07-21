export const RADII = {
  NONE: '0px',
  XS: '2px',
  SM: '4px',
  MD: '8px',
  LG: '12px',
  XL: '16px',
  FULL: '9999px',
} as const;

export type TRadiusTokenName = keyof typeof RADII;
export type TRadiusTokenValue = (typeof RADII)[TRadiusTokenName];
