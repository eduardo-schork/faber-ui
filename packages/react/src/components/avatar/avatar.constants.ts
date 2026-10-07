export const AVATAR_SIZES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type TAvatarSize = (typeof AVATAR_SIZES)[keyof typeof AVATAR_SIZES];
