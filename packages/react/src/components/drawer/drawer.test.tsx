import { cleanup, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { DRAWER_SIDES } from './drawer.constants';
import { Drawer } from './drawer.ui';

describe('Drawer', () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn(function showModal(this: HTMLDialogElement) {
      this.setAttribute('open', '');
    });
    HTMLDialogElement.prototype.close = vi.fn();
  });

  afterEach(cleanup);

  it('SHOULD render a modal dialog docked to the inline end by default', () => {
    const { getByRole } = render(
      <Drawer open title="Filters" onClose={vi.fn()}>
        Body
      </Drawer>,
    );
    const drawer = getByRole('dialog', { name: 'Filters' });

    expect(drawer.tagName).toBe('DIALOG');
    expect(drawer.getAttribute('data-placement')).toBe(DRAWER_SIDES.END);
  });

  it('SHOULD dock to the inline start WHEN requested', () => {
    const { getByRole } = render(
      <Drawer open side={DRAWER_SIDES.START} title="Navigation" onClose={vi.fn()}>
        Body
      </Drawer>,
    );

    expect(getByRole('dialog').getAttribute('data-placement')).toBe(DRAWER_SIDES.START);
  });
});
