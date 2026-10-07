import type { ComponentPropsWithoutRef } from 'react';

export type THeaderProps = ComponentPropsWithoutRef<'header'> & {
  /** Keeps the bar at the top of the viewport while the page scrolls. */
  readonly sticky?: boolean;
};
