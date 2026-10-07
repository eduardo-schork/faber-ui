import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TOAST_COLORS } from './toast.constants';
import { ToastBody, ToastContent, ToastTitle } from './toast.styles';
import { Toast, ToastRoot, ToastViewport } from './toast.ui';

describe('Toast', () => {
  afterEach(cleanup);

  it('SHOULD render a polite status with a title and body and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByRole, queryByRole } = render(
      <Toast ref={ref} title="Saved">
        Your changes are live.
      </Toast>,
    );
    const toast = getByRole('status');

    expect(toast.querySelector('[data-toast-title]')?.textContent).toBe('Saved');
    expect(toast.querySelector('[data-toast-body]')?.textContent).toBe('Your changes are live.');
    expect(queryByRole('button')).toBeNull();
    expect(ref.current).toBe(toast);
  });

  it('SHOULD interrupt as an alert WHEN the color is error', () => {
    const { getByRole } = render(<Toast color={TOAST_COLORS.ERROR}>Payment failed.</Toast>);

    expect(getByRole('alert').getAttribute('data-color')).toBe(TOAST_COLORS.ERROR);
  });

  it('SHOULD show a named dismiss button WHEN onDismiss is provided', () => {
    const handleDismiss = vi.fn();
    const { getByRole } = render(
      <Toast title="Saved" dismissLabel="Dismiss notification" onDismiss={handleDismiss} />,
    );

    fireEvent.click(getByRole('button', { name: 'Dismiss notification' }));

    expect(handleDismiss).toHaveBeenCalledOnce();
  });

  it('SHOULD group toasts in a named region', () => {
    const { getByRole } = render(
      <ToastViewport>
        <Toast title="Saved" />
      </ToastViewport>,
    );

    expect(getByRole('region', { name: 'Notifications' }).contains(getByRole('status'))).toBe(true);
  });

  it('SHOULD let a consumer assemble a toast from its parts', () => {
    const { getByRole } = render(
      <ToastRoot color={TOAST_COLORS.ERROR}>
        <ToastContent>
          <ToastTitle>Upload failed</ToastTitle>
          <ToastBody>The file is too large.</ToastBody>
        </ToastContent>
        <button type="button">Retry</button>
      </ToastRoot>,
    );
    const toast = getByRole('alert');

    expect(toast.getAttribute('data-color')).toBe(TOAST_COLORS.ERROR);
    expect(toast.querySelector('.faber-ui-toast-title')?.textContent).toBe('Upload failed');
    expect(getByRole('button', { name: 'Retry' }).parentElement).toBe(toast);
  });
});
