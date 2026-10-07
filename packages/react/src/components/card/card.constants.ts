export const CARD_PADDINGS = {
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type TCardPadding = (typeof CARD_PADDINGS)[keyof typeof CARD_PADDINGS];
