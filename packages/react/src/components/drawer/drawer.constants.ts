export const DRAWER_SIDES = {
  START: 'start',
  END: 'end',
} as const;

export type TDrawerSide = (typeof DRAWER_SIDES)[keyof typeof DRAWER_SIDES];
