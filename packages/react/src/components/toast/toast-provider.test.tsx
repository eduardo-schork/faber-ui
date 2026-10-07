import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { ToastProvider, useToast } from './toast-provider.ui';

function Trigger({ duration }: { readonly duration?: number }) {
  const { dismiss, toast } = useToast();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          toast({
            title: 'Saved',
            description: 'Changes are live.',
            ...(duration ? { duration } : {}),
          });
        }}
      >
        Notify
      </button>
      <button
        type="button"
        onClick={() => {
          dismiss();
        }}
      >
        Clear
      </button>
    </>
  );
}

describe('ToastProvider', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it('SHOULD show a toast in the notification region and remove it after its duration', () => {
    const { getByRole, queryByRole } = render(
      <ToastProvider duration={1000} label="Updates">
        <Trigger />
      </ToastProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Notify' }));

    expect(getByRole('region', { name: 'Updates' }).contains(getByRole('status'))).toBe(true);
    expect(getByRole('status').textContent).toContain('Changes are live.');

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(queryByRole('status')).toBeNull();
  });

  it('SHOULD keep only the newest toasts WHEN the queue passes the limit', () => {
    const { getByRole, getAllByRole } = render(
      <ToastProvider limit={2}>
        <Trigger />
      </ToastProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Notify' }));
    fireEvent.click(getByRole('button', { name: 'Notify' }));
    fireEvent.click(getByRole('button', { name: 'Notify' }));

    expect(getAllByRole('status')).toHaveLength(2);
  });

  it('SHOULD dismiss one toast from its button and all of them on request', () => {
    const { getByRole, getAllByRole, queryByRole } = render(
      <ToastProvider dismissLabel="Close notification">
        <Trigger duration={Infinity} />
      </ToastProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Notify' }));
    fireEvent.click(getByRole('button', { name: 'Notify' }));

    const [firstDismiss] = getAllByRole('button', { name: 'Close notification' });

    if (firstDismiss === undefined) {
      throw new Error('Expected a dismiss button.');
    }

    fireEvent.click(firstDismiss);

    expect(getAllByRole('status')).toHaveLength(1);

    fireEvent.click(getByRole('button', { name: 'Clear' }));

    expect(queryByRole('status')).toBeNull();
  });

  it('SHOULD reject useToast outside a provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(() => render(<Trigger />)).toThrow('useToast must be used inside ToastProvider.');

    consoleError.mockRestore();
  });
});
