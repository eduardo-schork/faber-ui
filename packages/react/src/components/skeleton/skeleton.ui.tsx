import { forwardRef } from 'react';

import { StyledSkeleton } from './skeleton.styles';
import type { TSkeletonProps } from './skeleton.types';

export const Skeleton = forwardRef<HTMLDivElement, TSkeletonProps>(function Skeleton(
  { animated = true, circle = false, ...nativeProps },
  ref,
) {
  return (
    <StyledSkeleton
      {...nativeProps}
      ref={ref}
      aria-hidden="true"
      data-animated={animated || undefined}
      data-circle={circle || undefined}
    />
  );
});
