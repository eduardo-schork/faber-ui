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

export type TToastOptions = {
  readonly color?: TToastColor;
  readonly description?: ReactNode;
  /** Milliseconds before the toast leaves. `Infinity` keeps it until it is dismissed. */
  readonly duration?: number;
  readonly title?: ReactNode;
};

export type TToastProviderProps = {
  readonly children: ReactNode;
  /** The accessible name of every dismiss button. */
  readonly dismissLabel?: string;
  /** The default lifetime of a toast, in milliseconds. */
  readonly duration?: number;
  /** Names the notification region for assistive technology. */
  readonly label?: string;
  /** How many toasts may be visible at once. Older ones leave first. */
  readonly limit?: number;
};
