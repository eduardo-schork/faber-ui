import type { ReactNode } from 'react';

import type { TButtonProps } from '../button';

export type TIconButtonProps = Omit<
  TButtonProps,
  'aria-label' | 'children' | 'endIcon' | 'fullWidth' | 'startIcon'
> & {
  readonly 'aria-label': string;
  readonly children: ReactNode;
};
