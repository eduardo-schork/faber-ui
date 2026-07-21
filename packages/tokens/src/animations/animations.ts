export const ANIMATIONS = {
  DURATION_FAST: '150ms',
  DURATION_SPIN: '700ms',
  EASING_LINEAR: 'linear',
  EASING_STANDARD: 'ease',
  ROTATION_FULL: '360deg',
} as const;

export type TAnimationTokenName = keyof typeof ANIMATIONS;
export type TAnimationTokenValue = (typeof ANIMATIONS)[TAnimationTokenName];
