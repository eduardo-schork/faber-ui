import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { AlertDialog } from './alert-dialog.ui';

describe('AlertDialog', () => {
  // jsdom does not implement the modal methods; these stand in for the browser behavior.
  const showModal = vi.fn(function showModal(this: HTMLDialogElement) {
    this.setAttribute('open', '');
  });
  const close = vi.fn(function close(this: HTMLDialogElement) {
    this.removeAttribute('open');
  });

  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = close;
  });

  afterEach(cleanup);

  it('SHOULD render an alert dialog named by its title and described by its message', () => {
    const ref = createRef<HTMLDialogElement>();
    const { getByRole } = render(
      <AlertDialog
        ref={ref}
        open
        title="Delete project?"
        confirmLabel="Delete"
        onCancel={vi.fn()}
        onConfirm={vi.fn()}
      >
        This cannot be undone.
      </AlertDialog>,
    );
    const dialog = getByRole('alertdialog', { name: 'Delete project?' });
    const descriptionId = dialog.getAttribute('aria-describedby') ?? '';

    expect(document.getElementById(descriptionId)?.textContent).toBe('This cannot be undone.');
    expect(ref.current).toBe(dialog);
  });

  it('SHOULD call the matching handler for each action and ignore the backdrop', () => {
    const handleCancel = vi.fn();
    const handleConfirm = vi.fn();
    const { getByRole } = render(
      <AlertDialog
        open
        destructive
        title="Delete project?"
        confirmLabel="Delete"
        cancelLabel="Keep"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        This cannot be undone.
      </AlertDialog>,
    );

    fireEvent.click(getByRole('alertdialog'));

    expect(handleCancel).not.toHaveBeenCalled();

    fireEvent.click(getByRole('button', { name: 'Keep' }));
    fireEvent.click(getByRole('button', { name: 'Delete' }));

    expect(handleCancel).toHaveBeenCalledOnce();
    expect(handleConfirm).toHaveBeenCalledOnce();
    expect(getByRole('button', { name: 'Delete' }).getAttribute('data-color')).toBe('accent');
  });

  it('SHOULD disable both actions WHEN confirming', () => {
    const { getByRole } = render(
      <AlertDialog
        open
        confirming
        title="Delete project?"
        confirmLabel="Delete"
        onCancel={vi.fn()}
        onConfirm={vi.fn()}
      >
        This cannot be undone.
      </AlertDialog>,
    );

    expect((getByRole('button', { name: 'Cancel' }) as HTMLButtonElement).disabled).toBe(true);
    expect(getByRole('button', { name: 'Delete' }).getAttribute('aria-busy')).toBe('true');
  });
});
