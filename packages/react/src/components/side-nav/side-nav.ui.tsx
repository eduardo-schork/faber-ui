import { forwardRef, useId } from 'react';

import { SideNavLabel, StyledSideNav, StyledSideNavGroup } from './side-nav.styles';
import type { TSideNavGroupProps, TSideNavProps } from './side-nav.types';

export const SideNav = forwardRef<HTMLElement, TSideNavProps>(function SideNav(props, ref) {
  return <StyledSideNav {...props} ref={ref} />;
});

export const SideNavGroup = forwardRef<HTMLDivElement, TSideNavGroupProps>(function SideNavGroup(
  { children, label, ...nativeProps },
  ref,
) {
  const labelId = useId();

  return (
    <StyledSideNavGroup {...nativeProps} ref={ref} aria-labelledby={labelId} role="group">
      <SideNavLabel id={labelId}>{label}</SideNavLabel>
      {children}
    </StyledSideNavGroup>
  );
});
