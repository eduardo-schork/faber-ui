export const MENU_ALIGNMENTS = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
} as const;

export type TMenuAlignment = (typeof MENU_ALIGNMENTS)[keyof typeof MENU_ALIGNMENTS];

export const MENU_ITEM_COLORS = {
  NEUTRAL: 'neutral',
  ERROR: 'error',
} as const;

export type TMenuItemColor = (typeof MENU_ITEM_COLORS)[keyof typeof MENU_ITEM_COLORS];
