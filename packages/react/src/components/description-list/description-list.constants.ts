export const DESCRIPTION_LIST_ORIENTATIONS = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

export type TDescriptionListOrientation =
  (typeof DESCRIPTION_LIST_ORIENTATIONS)[keyof typeof DESCRIPTION_LIST_ORIENTATIONS];
