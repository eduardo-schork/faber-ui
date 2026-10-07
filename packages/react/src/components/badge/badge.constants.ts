export const BADGE_COLORS = {
  ACCENT: 'accent',
  NEUTRAL: 'neutral',
  PRIMARY: 'primary',
} as const;

export type TBadgeColor = (typeof BADGE_COLORS)[keyof typeof BADGE_COLORS];
