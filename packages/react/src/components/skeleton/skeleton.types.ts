import type { ComponentPropsWithoutRef } from 'react';

export type TSkeletonProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  readonly animated?: boolean;
  readonly circle?: boolean;
};
