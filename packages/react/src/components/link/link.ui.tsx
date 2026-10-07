import { forwardRef } from 'react';

import {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import { StyledLink } from './link.styles';
import type { TLinkProps } from './link.types';

export const Link = forwardRef<HTMLAnchorElement, TLinkProps>(function Link(
  {
    as = 'a',
    children,
    size = TYPOGRAPHY_SIZES.SMALL,
    tone = TYPOGRAPHY_TONES.ACCENT,
    truncate = false,
    weight = TYPOGRAPHY_WEIGHTS.MEDIUM,
    ...nativeProps
  },
  ref,
) {
  return (
    <StyledLink
      {...nativeProps}
      as={as}
      ref={ref}
      data-line-height={TYPOGRAPHY_LINE_HEIGHTS.NORMAL}
      data-link
      data-size={size}
      data-tone={tone}
      data-truncate={truncate || undefined}
      data-weight={weight}
    >
      {children}
    </StyledLink>
  );
});
