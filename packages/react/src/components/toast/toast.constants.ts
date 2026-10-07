export const TOAST_COLORS = {
  NEUTRAL: 'neutral',
  PRIMARY: 'primary',
  ACCENT: 'accent',
  ERROR: 'error',
} as const;

export type TToastColor = (typeof TOAST_COLORS)[keyof typeof TOAST_COLORS];

/** How long a queued toast stays on screen by default, in milliseconds. */
export const TOAST_DEFAULT_DURATION = 5000;
