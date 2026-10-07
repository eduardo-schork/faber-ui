import { forwardRef } from 'react';

import { StyledProgress } from './progress.styles';
import type { TProgressProps } from './progress.types';

export const Progress = forwardRef<HTMLProgressElement, TProgressProps>(function Progress(
  { label, ...nativeProps },
  ref,
) {
  return <StyledProgress {...nativeProps} ref={ref} aria-label={label} />;
});
