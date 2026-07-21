import type { ComponentPropsWithoutRef, ElementType } from 'react';

import type {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from './typography.constants';

export type TTypographySize = (typeof TYPOGRAPHY_SIZES)[keyof typeof TYPOGRAPHY_SIZES];
export type TTypographyWeight = (typeof TYPOGRAPHY_WEIGHTS)[keyof typeof TYPOGRAPHY_WEIGHTS];
export type TTypographyTone = (typeof TYPOGRAPHY_TONES)[keyof typeof TYPOGRAPHY_TONES];
export type TTypographyLineHeight =
  (typeof TYPOGRAPHY_LINE_HEIGHTS)[keyof typeof TYPOGRAPHY_LINE_HEIGHTS];

export type TTypographyStyleProps = {
  readonly size?: TTypographySize;
  readonly tone?: TTypographyTone;
  readonly truncate?: boolean;
  readonly weight?: TTypographyWeight;
};

export type TTypographyComponentProps<TElement extends ElementType> = Omit<
  ComponentPropsWithoutRef<TElement>,
  'color' | 'size'
> &
  TTypographyStyleProps;

export type TTypographyDefaults = Required<
  Pick<TTypographyStyleProps, 'size' | 'tone' | 'weight'>
> & {
  readonly italic?: boolean;
  readonly lineHeight: TTypographyLineHeight;
  readonly link?: boolean;
};
