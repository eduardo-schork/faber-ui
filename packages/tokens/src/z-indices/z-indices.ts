export const Z_INDICES = {
  BASE: 0,
  STICKY: 100,
  OVERLAY: 1000,
  TOAST: 1100,
} as const;

export type TZIndexTokenName = keyof typeof Z_INDICES;
export type TZIndexTokenValue = (typeof Z_INDICES)[TZIndexTokenName];
