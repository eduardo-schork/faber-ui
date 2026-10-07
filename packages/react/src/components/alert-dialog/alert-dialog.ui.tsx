import { forwardRef, useId } from 'react';

import { Button, BUTTON_COLORS, BUTTON_VARIANTS } from '../button';
import { DialogRoot, DialogTitle } from '../dialog';
import { AlertDialogBody, AlertDialogFooter, AlertDialogHeader } from './alert-dialog.styles';
import type { TAlertDialogProps } from './alert-dialog.types';

/** A modal that interrupts for a decision. It closes only through one of its two actions. */
export const AlertDialog = forwardRef<HTMLDialogElement, TAlertDialogProps>(function AlertDialog(
  {
    cancelLabel = 'Cancel',
    children,
    confirming = false,
    confirmLabel,
    destructive = false,
    onCancel,
    onConfirm,
    title,
    ...rootProps
  },
  ref,
) {
  const descriptionId = useId();

  return (
    <DialogRoot
      {...rootProps}
      ref={ref}
      aria-describedby={descriptionId}
      closeOnBackdropClick={false}
      role="alertdialog"
      onClose={onCancel}
    >
      <AlertDialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </AlertDialogHeader>
      <AlertDialogBody id={descriptionId}>{children}</AlertDialogBody>
      <AlertDialogFooter>
        {/* The safe action takes the initial focus, so Enter never confirms by accident. */}
        <Button
          // eslint-disable-next-line jsx-a11y/no-autofocus -- a modal dialog must place focus inside itself
          autoFocus
          color={BUTTON_COLORS.NEUTRAL}
          disabled={confirming}
          variant={BUTTON_VARIANTS.OUTLINE}
          onClick={onCancel}
        >
          {cancelLabel}
        </Button>
        <Button
          color={destructive ? BUTTON_COLORS.ACCENT : BUTTON_COLORS.PRIMARY}
          loading={confirming}
          onClick={onConfirm}
        >
          {confirmLabel}
        </Button>
      </AlertDialogFooter>
    </DialogRoot>
  );
});
