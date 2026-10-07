import { forwardRef } from 'react';

import { StyledBox } from './box.styles';
import type { TBoxProps } from './box.types';

export const Box = forwardRef<HTMLDivElement, TBoxProps>(function Box(
  { as, padding, ...nativeProps },
  ref,
) {
  return (
    <StyledBox
      {...nativeProps}
      {...(as === undefined ? {} : { as })}
      {...(padding === undefined ? {} : { $padding: padding })}
      ref={ref}
      data-box=""
    />
  );
});
