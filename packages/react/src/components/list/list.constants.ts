export const LIST_MARKERS = {
  DEFAULT: 'default',
  NONE: 'none',
} as const;

export type TListMarker = (typeof LIST_MARKERS)[keyof typeof LIST_MARKERS];
