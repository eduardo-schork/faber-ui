export const DIVIDER_ORIENTATIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export type TDividerOrientation = (typeof DIVIDER_ORIENTATIONS)[keyof typeof DIVIDER_ORIENTATIONS];
