export const LINE_HEIGHTS = {
  ZERO: 0,
  NONE: 1,
  TIGHT: 1.2,
  NORMAL: 1.5,
  RELAXED: 1.75,
} as const;

export type TLineHeightTokenName = keyof typeof LINE_HEIGHTS;
export type TLineHeightTokenValue = (typeof LINE_HEIGHTS)[TLineHeightTokenName];
