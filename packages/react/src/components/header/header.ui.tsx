import { forwardRef } from 'react';

import { StyledHeader } from './header.styles';
import type { THeaderProps } from './header.types';

export const Header = forwardRef<HTMLElement, THeaderProps>(function Header(
  { sticky = false, ...nativeProps },
  ref,
) {
  return <StyledHeader {...nativeProps} ref={ref} data-sticky={sticky || undefined} />;
});
