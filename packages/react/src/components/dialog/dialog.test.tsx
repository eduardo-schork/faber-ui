import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { DialogBody, DialogFooter, DialogHeader } from './dialog.styles';
import { Dialog, DialogClose, DialogRoot, DialogTitle } from './dialog.ui';

describe('Dialog', () => {
  // jsdom does not implement the modal methods; these stand in for the browser behavior.
  const showModal = vi.fn(function showModal(this: HTMLDialogElement) {
    this.setAttribute('open', '');
  });
  const close = vi.fn(function close(this: HTMLDialogElement) {
    this.removeAttribute('open');
  });

  beforeEach(() => {
    showModal.mockClear();
    close.mockClear();
    HTMLDialogElement.prototype.showModal = showModal;
    HTMLDialogElement.prototype.close = close;
  });

  afterEach(cleanup);

  it('SHOULD open a native modal dialog named by its title and forward its ref', () => {
    const ref = createRef<HTMLDialogElement>();
    const { getByRole } = render(
      <Dialog ref={ref} open title="Delete project" onClose={vi.fn()}>
        This cannot be undone.
      </Dialog>,
    );
    const dialog = getByRole('dialog', { name: 'Delete project' });

    expect(dialog.tagName).toBe('DIALOG');
    expect(showModal).toHaveBeenCalledOnce();
    expect(dialog.querySelector('[data-dialog-body]')?.textContent).toBe('This cannot be undone.');
    expect(ref.current).toBe(dialog);
  });

  it('SHOULD stay closed and close natively WHEN open becomes false', () => {
    const { rerender } = render(
      <Dialog open={false} title="Delete project" onClose={vi.fn()}>
        Body
      </Dialog>,
    );

    expect(showModal).not.toHaveBeenCalled();

    rerender(
      <Dialog open title="Delete project" onClose={vi.fn()}>
        Body
      </Dialog>,
    );
    rerender(
      <Dialog open={false} title="Delete project" onClose={vi.fn()}>
        Body
      </Dialog>,
    );

    expect(close).toHaveBeenCalledOnce();
  });

  it('SHOULD request a close from the close button, Escape, and the backdrop', () => {
    const handleClose = vi.fn();
    const { getByRole } = render(
      <Dialog open title="Delete project" closeLabel="Dismiss" onClose={handleClose}>
        Body
      </Dialog>,
    );
    const dialog = getByRole('dialog');

    fireEvent.click(getByRole('button', { name: 'Dismiss' }));
    fireEvent(dialog, new Event('cancel', { cancelable: true }));
    fireEvent.click(dialog);

    expect(handleClose).toHaveBeenCalledTimes(3);
  });

  it('SHOULD ignore backdrop clicks WHEN closeOnBackdropClick is false and render a footer', () => {
    const handleClose = vi.fn();
    const { getByRole } = render(
      <Dialog
        open
        title="Delete project"
        closeOnBackdropClick={false}
        footer={<button type="button">Delete</button>}
        onClose={handleClose}
      >
        Body
      </Dialog>,
    );

    fireEvent.click(getByRole('dialog'));

    expect(handleClose).not.toHaveBeenCalled();
    expect(getByRole('button', { name: 'Delete' })).toBeDefined();
  });

  it('SHOULD let a consumer assemble a dialog from its parts', () => {
    const handleClose = vi.fn();
    const { getByRole } = render(
      <DialogRoot open onClose={handleClose}>
        <DialogBody>Body first</DialogBody>
        <DialogHeader>
          <DialogTitle>Custom layout</DialogTitle>
          <DialogClose aria-label="Dismiss" />
        </DialogHeader>
        <DialogFooter>Footer</DialogFooter>
      </DialogRoot>,
    );
    const dialog = getByRole('dialog', { name: 'Custom layout' });

    expect(dialog.firstElementChild?.classList.contains('faber-ui-dialog-body')).toBe(true);

    fireEvent.click(getByRole('button', { name: 'Dismiss' }));

    expect(handleClose).toHaveBeenCalledOnce();
  });

  it('SHOULD use an explicit accessible name WHEN the composition has no title', () => {
    const { getByRole } = render(
      <DialogRoot open aria-label="Quick search" onClose={vi.fn()}>
        <DialogBody>Results</DialogBody>
      </DialogRoot>,
    );

    expect(getByRole('dialog', { name: 'Quick search' }).hasAttribute('aria-labelledby')).toBe(
      false,
    );
  });

  it('SHOULD reject a dialog part rendered outside DialogRoot', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(() => render(<DialogTitle>Orphan</DialogTitle>)).toThrow(
      'DialogTitle must be rendered inside DialogRoot.',
    );

    consoleError.mockRestore();
  });
});
