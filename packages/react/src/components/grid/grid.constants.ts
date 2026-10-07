export const GRID_ALIGNS = {
  STRETCH: 'stretch',
  START: 'start',
  CENTER: 'center',
  END: 'end',
} as const;

export type TGridAlign = (typeof GRID_ALIGNS)[keyof typeof GRID_ALIGNS];
