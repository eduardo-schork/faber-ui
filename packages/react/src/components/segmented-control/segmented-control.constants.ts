export const SEGMENTED_CONTROL_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

export type TSegmentedControlSize =
  (typeof SEGMENTED_CONTROL_SIZES)[keyof typeof SEGMENTED_CONTROL_SIZES];
