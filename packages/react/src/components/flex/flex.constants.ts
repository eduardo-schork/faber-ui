export const FLEX_DIRECTIONS = {
  ROW: 'row',
  ROW_REVERSE: 'row-reverse',
  COLUMN: 'column',
  COLUMN_REVERSE: 'column-reverse',
} as const;

export const FLEX_ALIGNS = {
  STRETCH: 'stretch',
  START: 'flex-start',
  CENTER: 'center',
  END: 'flex-end',
  BASELINE: 'baseline',
} as const;

export const FLEX_JUSTIFIES = {
  START: 'flex-start',
  CENTER: 'center',
  END: 'flex-end',
  SPACE_BETWEEN: 'space-between',
  SPACE_AROUND: 'space-around',
  SPACE_EVENLY: 'space-evenly',
} as const;

export const FLEX_WRAPS = {
  NO_WRAP: 'nowrap',
  WRAP: 'wrap',
  WRAP_REVERSE: 'wrap-reverse',
} as const;
