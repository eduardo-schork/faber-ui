export const CONTAINER_SIZES = {
  SMALL: '720px',
  MEDIUM: '960px',
  LARGE: '1140px',
  WIDE: '1320px',
} as const;

export type TContainerSizeTokenName = keyof typeof CONTAINER_SIZES;
export type TContainerSizeTokenValue = (typeof CONTAINER_SIZES)[TContainerSizeTokenName];
