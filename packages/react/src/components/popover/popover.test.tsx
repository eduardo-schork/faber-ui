import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../button';
import { Popover } from './popover.ui';

describe('Popover', () => {
  afterEach(cleanup);

  it('SHOULD expose a collapsed trigger WHEN closed', () => {
    const { getByRole, queryByRole } = render(
      <Popover label="Share" content="Anyone with the link can view.">
        <Button>Share</Button>
      </Popover>,
    );

    expect(getByRole('button', { name: 'Share' }).getAttribute('aria-expanded')).toBe('false');
    expect(queryByRole('dialog')).toBeNull();
  });

  it('SHOULD open a named dialog from its trigger and report the change', () => {
    const handleOpenChange = vi.fn();
    const { getByRole } = render(
      <Popover
        label="Share settings"
        content="Anyone with the link can view."
        onOpenChange={handleOpenChange}
      >
        <Button>Share</Button>
      </Popover>,
    );

    fireEvent.click(getByRole('button', { name: 'Share' }));

    expect(getByRole('dialog', { name: 'Share settings' }).textContent).toBe(
      'Anyone with the link can view.',
    );
    expect(getByRole('button', { name: 'Share' }).getAttribute('aria-expanded')).toBe('true');
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
});
