import { forwardRef } from 'react';

import { BADGE_COLORS } from './badge.constants';
import { StyledBadge } from './badge.styles';
import type { TBadgeProps } from './badge.types';

export const Badge = forwardRef<HTMLSpanElement, TBadgeProps>(function Badge(
  { color = BADGE_COLORS.NEUTRAL, ...nativeProps },
  ref,
) {
  return <StyledBadge {...nativeProps} ref={ref} data-color={color} />;
});
