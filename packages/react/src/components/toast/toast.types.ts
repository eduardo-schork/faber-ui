import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TToastColor } from './toast.constants';

/** The toast surface on its own, for a layout assembled from the toast parts. */
export type TToastRootProps = Omit<ComponentPropsWithoutRef<'div'>, 'color'> & {
  readonly color?: TToastColor;
};

export type TToastProps = Omit<TToastRootProps, 'title'> & {
  /** The accessible name of the dismiss button. */
  readonly dismissLabel?: string;
  /** Shows a dismiss button and is called when it is pressed. */
  readonly onDismiss?: () => void;
  readonly title?: ReactNode;
};

export type TToastViewportProps = ComponentPropsWithoutRef<'div'> & {
  /** Names the notification region for assistive technology. */
  readonly 'aria-label'?: string;
};
