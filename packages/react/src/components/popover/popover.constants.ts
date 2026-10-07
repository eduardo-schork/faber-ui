export const POPOVER_SIDES = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
} as const;

export type TPopoverSide = (typeof POPOVER_SIDES)[keyof typeof POPOVER_SIDES];

export const POPOVER_ALIGNMENTS = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
} as const;

export type TPopoverAlignment = (typeof POPOVER_ALIGNMENTS)[keyof typeof POPOVER_ALIGNMENTS];
