import { forwardRef } from 'react';

import { StyledNavLink } from './nav-link.styles';
import type { TNavLinkProps } from './nav-link.types';

export const NavLink = forwardRef<HTMLAnchorElement, TNavLinkProps>(function NavLink(
  { 'aria-current': ariaCurrent, as = 'a', current = false, ...nativeProps },
  ref,
) {
  return (
    <StyledNavLink
      {...nativeProps}
      as={as}
      ref={ref}
      aria-current={current ? 'page' : ariaCurrent}
    />
  );
});
