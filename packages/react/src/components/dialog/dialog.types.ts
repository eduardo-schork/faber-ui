import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TIconButtonProps } from '../icon-button';
import type { TDialogPlacement } from './dialog.constants';

/** The modal shell on its own, for a layout assembled from the dialog parts. */
export type TDialogRootProps = Omit<ComponentPropsWithoutRef<'dialog'>, 'onClose' | 'open'> & {
  /** Whether a click on the backdrop requests a close. */
  readonly closeOnBackdropClick?: boolean;
  /** Called when the dialog asks to close: Escape, a `DialogClose`, or the backdrop. */
  readonly onClose: () => void;
  readonly open: boolean;
  readonly placement?: TDialogPlacement;
};

export type TDialogProps = Omit<TDialogRootProps, 'children' | 'title'> & {
  readonly children: ReactNode;
  /** The accessible name of the close button. */
  readonly closeLabel?: string;
  /** Actions shown at the end of the dialog, usually buttons. */
  readonly footer?: ReactNode;
  readonly title: ReactNode;
};

/** The heading that names the dialog. Its id is wired to the enclosing `DialogRoot`. */
export type TDialogTitleProps = Omit<ComponentPropsWithoutRef<'h2'>, 'color' | 'id'>;

/** An icon button that asks the enclosing `DialogRoot` to close. */
export type TDialogCloseProps = Omit<TIconButtonProps, 'aria-label' | 'children'> & {
  readonly 'aria-label'?: string;
  readonly children?: ReactNode;
};
