export const ALERT_COLORS = {
  NEUTRAL: 'neutral',
  PRIMARY: 'primary',
  ACCENT: 'accent',
  ERROR: 'error',
} as const;

export type TAlertColor = (typeof ALERT_COLORS)[keyof typeof ALERT_COLORS];
