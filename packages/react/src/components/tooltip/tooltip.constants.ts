export const TOOLTIP_SIDES = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
} as const;

export type TTooltipSide = (typeof TOOLTIP_SIDES)[keyof typeof TOOLTIP_SIDES];

/** Milliseconds the pointer rests on the trigger before the tooltip opens. */
export const TOOLTIP_DEFAULT_DELAY = 400;
