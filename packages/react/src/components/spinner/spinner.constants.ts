export const SPINNER_SIZES = {
  CURRENT: 'current',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type TSpinnerSize = (typeof SPINNER_SIZES)[keyof typeof SPINNER_SIZES];
