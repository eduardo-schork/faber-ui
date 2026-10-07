import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TVFlexProps } from '../flex';

export type TSideNavProps = ComponentPropsWithoutRef<'nav'>;

export type TSideNavGroupProps = Omit<TVFlexProps, 'as'> & {
  /** The heading of the group. It names the group for assistive technology. */
  readonly label: ReactNode;
};
