import { forwardRef } from 'react';

import { StyledVisuallyHidden } from './visually-hidden.styles';
import type { TVisuallyHiddenProps } from './visually-hidden.types';

export const VisuallyHidden = forwardRef<HTMLSpanElement, TVisuallyHiddenProps>(
  function VisuallyHidden({ focusable = false, ...nativeProps }, ref) {
    return (
      <StyledVisuallyHidden {...nativeProps} ref={ref} data-focusable={focusable || undefined} />
    );
  },
);
