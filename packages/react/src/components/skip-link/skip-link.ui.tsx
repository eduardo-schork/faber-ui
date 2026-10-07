import { forwardRef } from 'react';

import { TYPOGRAPHY_TONES } from '../typography/typography.constants';
import { StyledSkipLink } from './skip-link.styles';
import type { TSkipLinkProps } from './skip-link.types';

export const SkipLink = forwardRef<HTMLAnchorElement, TSkipLinkProps>(function SkipLink(
  { children = 'Skip to content', href = '#main', tone = TYPOGRAPHY_TONES.PRIMARY, ...linkProps },
  ref,
) {
  return (
    <StyledSkipLink {...linkProps} ref={ref} href={href} tone={tone}>
      {children}
    </StyledSkipLink>
  );
});
