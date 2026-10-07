import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TAlertColor } from './alert.constants';

/** The alert surface on its own, for a layout assembled from `AlertTitle` and `AlertBody`. */
export type TAlertRootProps = Omit<ComponentPropsWithoutRef<'div'>, 'color'> & {
  readonly color?: TAlertColor;
};

export type TAlertProps = Omit<TAlertRootProps, 'title'> & {
  readonly title?: ReactNode;
};
