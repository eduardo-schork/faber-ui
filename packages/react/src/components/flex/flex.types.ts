import type {
  TBreakpointTokenName,
  TSpacingScaleValue,
  TSpacingTokenName,
  TSpacingTokenValue,
} from '@faber-ui/tokens';
import type { ComponentPropsWithoutRef, CSSProperties, ElementType } from 'react';

import type { FLEX_ALIGNS, FLEX_DIRECTIONS, FLEX_JUSTIFIES, FLEX_WRAPS } from './flex.constants';

export type TFlexDirection = (typeof FLEX_DIRECTIONS)[keyof typeof FLEX_DIRECTIONS];
export type TFlexAlign = (typeof FLEX_ALIGNS)[keyof typeof FLEX_ALIGNS];
export type TFlexJustify = (typeof FLEX_JUSTIFIES)[keyof typeof FLEX_JUSTIFIES];
export type TFlexWrap = (typeof FLEX_WRAPS)[keyof typeof FLEX_WRAPS];
/** A spacing token name, a `SPACINGS` reference, or a raw `SPACING_SCALE` length. */
export type TFlexGap = TSpacingTokenName | TSpacingTokenValue | TSpacingScaleValue;
export type TFlexResponsiveValue<TValue> = TValue | Partial<Record<TBreakpointTokenName, TValue>>;

type TFlexStyleProps = {
  readonly align?: TFlexResponsiveValue<TFlexAlign>;
  readonly direction?: TFlexResponsiveValue<TFlexDirection>;
  readonly gap?: TFlexResponsiveValue<TFlexGap>;
  readonly inline?: boolean;
  readonly justify?: TFlexResponsiveValue<TFlexJustify>;
  readonly outlineColor?: CSSProperties['outlineColor'];
  readonly wrap?: TFlexResponsiveValue<TFlexWrap>;
};

type TNativeFlexProps = Omit<ComponentPropsWithoutRef<'div'>, keyof TFlexStyleProps>;

export type TFlexProps = TNativeFlexProps &
  TFlexStyleProps & {
    readonly as?: ElementType;
  };

export type THFlexProps = Omit<TFlexProps, 'direction'>;
export type TVFlexProps = Omit<TFlexProps, 'direction'>;
