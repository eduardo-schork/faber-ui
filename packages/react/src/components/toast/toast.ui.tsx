import { forwardRef, type ReactNode } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { IconButton } from '../icon-button';
import { TOAST_COLORS } from './toast.constants';
import {
  StyledToast,
  StyledToastViewport,
  ToastBody,
  ToastContent,
  ToastTitle,
} from './toast.styles';
import type { TToastProps, TToastRootProps, TToastViewportProps } from './toast.types';

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

function DismissGlyph() {
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

/** A fixed region in the corner of the viewport that stacks the toasts rendered inside it. */
export const ToastViewport = forwardRef<HTMLDivElement, TToastViewportProps>(function ToastViewport(
  { 'aria-label': ariaLabel = 'Notifications', ...nativeProps },
  ref,
) {
  return <StyledToastViewport {...nativeProps} ref={ref} aria-label={ariaLabel} role="region" />;
});

export const ToastRoot = forwardRef<HTMLDivElement, TToastRootProps>(function ToastRoot(
  { color = TOAST_COLORS.NEUTRAL, role, ...nativeProps },
  ref,
) {
  return (
    <StyledToast
      {...nativeProps}
      ref={ref}
      // Errors interrupt; everything else waits for the screen reader to finish.
      role={role ?? (color === TOAST_COLORS.ERROR ? 'alert' : 'status')}
      data-color={color}
    />
  );
});

export const Toast = forwardRef<HTMLDivElement, TToastProps>(function Toast(
  { children, dismissLabel = 'Dismiss', onDismiss, title, ...rootProps },
  ref,
) {
  return (
    <ToastRoot {...rootProps} ref={ref}>
      <ToastContent>
        {hasContent(title) ? <ToastTitle data-toast-title>{title}</ToastTitle> : null}
        {hasContent(children) ? <ToastBody data-toast-body>{children}</ToastBody> : null}
      </ToastContent>
      {onDismiss === undefined ? null : (
        <IconButton
          aria-label={dismissLabel}
          color={BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.SUBTLE}
          onClick={onDismiss}
        >
          <DismissGlyph />
        </IconButton>
      )}
    </ToastRoot>
  );
});
