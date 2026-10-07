import type { ComponentPropsWithoutRef } from 'react';

export type TProgressProps = Omit<
  ComponentPropsWithoutRef<'progress'>,
  'aria-label' | 'children'
> & {
  /** Names what is progressing. Omit `value` for an indeterminate wait. */
  readonly label: string;
};
