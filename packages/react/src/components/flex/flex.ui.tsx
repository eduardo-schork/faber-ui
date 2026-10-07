import { forwardRef, type CSSProperties } from 'react';

import { FLEX_DIRECTIONS } from './flex.constants';
import { StyledFlex } from './flex.styles';
import type { TFlexProps, THFlexProps, TVFlexProps } from './flex.types';

type TFlexCSSProperties = CSSProperties & {
  readonly '--faber-ui-flex-outline-color'?: string;
};

export const Flex = forwardRef<HTMLDivElement, TFlexProps>(function Flex(
  {
    align,
    as,
    direction = FLEX_DIRECTIONS.ROW,
    gap,
    inline = false,
    justify,
    outlineColor,
    style,
    wrap,
    ...nativeProps
  },
  ref,
) {
  const resolvedStyle =
    outlineColor === undefined
      ? style
      : ({
          ...style,
          '--faber-ui-flex-outline-color': outlineColor,
        } satisfies TFlexCSSProperties);

  return (
    <StyledFlex
      {...nativeProps}
      {...(align === undefined ? {} : { $align: align })}
      {...(as === undefined ? {} : { as })}
      {...(gap === undefined ? {} : { $gap: gap })}
      {...(justify === undefined ? {} : { $justify: justify })}
      {...(wrap === undefined ? {} : { $wrap: wrap })}
      ref={ref}
      $direction={direction}
      $inline={inline}
      data-flex=""
      data-inline={inline || undefined}
      data-outline-color={outlineColor === undefined ? undefined : ''}
      style={resolvedStyle}
    />
  );
});

export const HFlex = forwardRef<HTMLDivElement, THFlexProps>(function HFlex(props, ref) {
  return <Flex {...props} ref={ref} direction={FLEX_DIRECTIONS.ROW} />;
});

export const VFlex = forwardRef<HTMLDivElement, TVFlexProps>(function VFlex(props, ref) {
  return <Flex {...props} ref={ref} direction={FLEX_DIRECTIONS.COLUMN} />;
});
