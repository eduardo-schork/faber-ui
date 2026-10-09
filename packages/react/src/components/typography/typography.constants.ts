export const TYPOGRAPHY_SIZES = {
  SMALLEST: 'smallest',
  SMALLER: 'smaller',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  LARGER: 'larger',
  LARGEST: 'largest',
  /** Fluid sizes for page and section titles. They shrink with the viewport. */
  DISPLAY_SMALL: 'display-small',
  DISPLAY_MEDIUM: 'display-medium',
  DISPLAY_LARGE: 'display-large',
  /** Takes the font size of the surrounding text. */
  INHERIT: 'inherit',
} as const;

export const TYPOGRAPHY_WEIGHTS = {
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMIBOLD: 'semibold',
  BOLD: 'bold',
  /** Takes the font weight of the surrounding text. */
  INHERIT: 'inherit',
} as const;

export const TYPOGRAPHY_TONES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DISABLED: 'disabled',
  ACCENT: 'accent',
  INHERIT: 'inherit',
} as const;

export const TYPOGRAPHY_LINE_HEIGHTS = {
  TIGHT: 'tight',
  NORMAL: 'normal',
  RELAXED: 'relaxed',
} as const;
