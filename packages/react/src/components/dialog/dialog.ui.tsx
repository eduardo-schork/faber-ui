import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  type MouseEvent,
  type ReactNode,
} from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { IconButton } from '../icon-button';
import { DIALOG_PLACEMENTS } from './dialog.constants';
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  StyledDialog,
  StyledDialogTitle,
} from './dialog.styles';
import type {
  TDialogCloseProps,
  TDialogProps,
  TDialogRootProps,
  TDialogTitleProps,
} from './dialog.types';

type TDialogContext = {
  readonly onClose: () => void;
  readonly titleId: string;
};

const DialogContext = createContext<TDialogContext | null>(null);

const useDialogContext = (componentName: string) => {
  const context = useContext(DialogContext);

  if (context === null) {
    throw new Error(`${componentName} must be rendered inside DialogRoot.`);
  }

  return context;
};

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

function CloseGlyph() {
  return (
    <svg
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export const DialogRoot = forwardRef<HTMLDialogElement, TDialogRootProps>(function DialogRoot(
  {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    closeOnBackdropClick = true,
    onClick,
    onClose,
    open,
    placement = DIALOG_PLACEMENTS.CENTER,
    ...nativeProps
  },
  forwardedRef,
) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();
  const context = useMemo<TDialogContext>(() => ({ onClose, titleId }), [onClose, titleId]);

  // The native modal state is imperative: showModal() provides the top layer, the backdrop,
  // focus containment, and Escape handling that the `open` attribute alone does not.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog === null) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const setRefs = (dialog: HTMLDialogElement | null) => {
    dialogRef.current = dialog;

    if (typeof forwardedRef === 'function') {
      forwardedRef(dialog);
    } else if (forwardedRef !== null) {
      forwardedRef.current = dialog;
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    onClick?.(event);

    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <DialogContext.Provider value={context}>
      {/* The dialog element itself is the backdrop hit area; Escape is handled natively. */}
      <StyledDialog
        {...nativeProps}
        ref={setRefs}
        aria-label={ariaLabel}
        // An explicit name wins; otherwise the dialog is named by its DialogTitle.
        aria-labelledby={ariaLabelledBy ?? (ariaLabel === undefined ? titleId : undefined)}
        data-placement={placement}
        onCancel={(event) => {
          event.preventDefault();
          onClose();
        }}
        onClick={handleBackdropClick}
      />
    </DialogContext.Provider>
  );
});

export const DialogTitle = forwardRef<HTMLHeadingElement, TDialogTitleProps>(
  function DialogTitle(props, ref) {
    const { titleId } = useDialogContext('DialogTitle');

    return <StyledDialogTitle {...props} ref={ref} id={titleId} />;
  },
);

export const DialogClose = forwardRef<HTMLButtonElement, TDialogCloseProps>(function DialogClose(
  { 'aria-label': ariaLabel = 'Close', children, onClick, ...buttonProps },
  ref,
) {
  const { onClose } = useDialogContext('DialogClose');

  return (
    <IconButton
      color={BUTTON_COLORS.NEUTRAL}
      size={BUTTON_SIZES.SMALL}
      variant={BUTTON_VARIANTS.SUBTLE}
      {...buttonProps}
      ref={ref}
      aria-label={ariaLabel}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          onClose();
        }
      }}
    >
      {children ?? <CloseGlyph />}
    </IconButton>
  );
});

export const Dialog = forwardRef<HTMLDialogElement, TDialogProps>(function Dialog(
  { children, closeLabel = 'Close', footer, title, ...rootProps },
  ref,
) {
  return (
    <DialogRoot {...rootProps} ref={ref}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogClose aria-label={closeLabel} />
      </DialogHeader>
      <DialogBody data-dialog-body>{children}</DialogBody>
      {hasContent(footer) ? <DialogFooter data-dialog-footer>{footer}</DialogFooter> : null}
    </DialogRoot>
  );
});
