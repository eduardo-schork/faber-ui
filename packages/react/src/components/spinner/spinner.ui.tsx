import { forwardRef } from 'react';

import { SPINNER_SIZES } from './spinner.constants';
import { StyledSpinner } from './spinner.styles';
import type { TSpinnerProps } from './spinner.types';

export const Spinner = forwardRef<HTMLSpanElement, TSpinnerProps>(function Spinner(
  { decorative = false, label, size = SPINNER_SIZES.MEDIUM, ...nativeProps },
  ref,
) {
  return (
    <StyledSpinner
      {...nativeProps}
      ref={ref}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      data-size={size}
      role={decorative ? undefined : 'status'}
    />
  );
});
