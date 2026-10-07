import { forwardRef } from 'react';

import { DIVIDER_ORIENTATIONS } from './divider.constants';
import { StyledDivider } from './divider.styles';
import type { TDividerProps } from './divider.types';

export const Divider = forwardRef<HTMLHRElement, TDividerProps>(function Divider(
  { orientation = DIVIDER_ORIENTATIONS.HORIZONTAL, ...nativeProps },
  ref,
) {
  return (
    <StyledDivider
      {...nativeProps}
      ref={ref}
      aria-orientation={orientation}
      data-orientation={orientation}
    />
  );
});
