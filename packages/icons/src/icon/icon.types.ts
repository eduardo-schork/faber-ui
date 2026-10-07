import type { ComponentPropsWithoutRef } from 'react';

import type { TIconSize } from './icon.constants';

export type TIconProps = Omit<
  ComponentPropsWithoutRef<'svg'>,
  'aria-hidden' | 'aria-label' | 'children' | 'height' | 'role' | 'width'
> & {
  /** Names the icon for assistive technology. Without it the icon is decorative and hidden. */
  readonly label?: string;
  readonly size?: TIconSize;
};
