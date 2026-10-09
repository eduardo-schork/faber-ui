export const ANIMATIONS = {
  DURATION_INSTANT: '100ms',
  DURATION_FAST: '150ms',
  DURATION_MODERATE: '250ms',
  DURATION_SLOW: '1500ms',
  DURATION_SPIN: '700ms',
  EASING_LINEAR: 'linear',
  EASING_STANDARD: 'ease',
  EASING_ENTER: 'cubic-bezier(0.16, 1, 0.3, 1)',
  EASING_EXIT: 'cubic-bezier(0.4, 0, 1, 1)',
  ROTATION_FULL: '360deg',
  SCALE_PRESSED: '0.97',
  SCALE_ENTER: '0.96',
} as const;

export type TAnimationTokenName = keyof typeof ANIMATIONS;
export type TAnimationTokenValue = (typeof ANIMATIONS)[TAnimationTokenName];
