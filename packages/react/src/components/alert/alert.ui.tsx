import { forwardRef, type ReactNode } from 'react';

import { ALERT_COLORS } from './alert.constants';
import { AlertBody, AlertTitle, StyledAlert } from './alert.styles';
import type { TAlertProps, TAlertRootProps } from './alert.types';

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

export const AlertRoot = forwardRef<HTMLDivElement, TAlertRootProps>(function AlertRoot(
  { color = ALERT_COLORS.NEUTRAL, role = 'note', ...nativeProps },
  ref,
) {
  return <StyledAlert {...nativeProps} ref={ref} role={role} data-color={color} />;
});

export const Alert = forwardRef<HTMLDivElement, TAlertProps>(function Alert(
  { children, title, ...rootProps },
  ref,
) {
  return (
    <AlertRoot {...rootProps} ref={ref}>
      {hasContent(title) ? <AlertTitle data-alert-title>{title}</AlertTitle> : null}
      {hasContent(children) ? <AlertBody data-alert-body>{children}</AlertBody> : null}
    </AlertRoot>
  );
});
