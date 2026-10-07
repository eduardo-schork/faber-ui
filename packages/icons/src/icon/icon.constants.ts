export const ICON_SIZES = {
  CURRENT: 'current',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type TIconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

/** `current` follows the surrounding font size; the others are fixed. */
export const ICON_DIMENSIONS = {
  [ICON_SIZES.CURRENT]: '1em',
  [ICON_SIZES.SMALL]: '16px',
  [ICON_SIZES.MEDIUM]: '20px',
  [ICON_SIZES.LARGE]: '24px',
} as const satisfies Readonly<Record<TIconSize, string>>;
