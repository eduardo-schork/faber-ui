import type { ReactNode } from 'react';

import type { TDialogRootProps } from '../dialog';

export type TAlertDialogProps = Omit<
  TDialogRootProps,
  'children' | 'closeOnBackdropClick' | 'onClose' | 'placement' | 'title'
> & {
  readonly cancelLabel?: ReactNode;
  /** The consequence of confirming, in a sentence. It is announced with the title. */
  readonly children: ReactNode;
  readonly confirmLabel: ReactNode;
  /** Shows the confirm button as busy and disables both actions. */
  readonly confirming?: boolean;
  /** Draws the confirm button in the accent color, for actions that remove or overwrite. */
  readonly destructive?: boolean;
  /** Called by the cancel button and by Escape. */
  readonly onCancel: () => void;
  readonly onConfirm: () => void;
  readonly title: ReactNode;
};
