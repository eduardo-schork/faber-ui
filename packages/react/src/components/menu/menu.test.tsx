import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from '../button';
import { MENU_ITEM_COLORS } from './menu.constants';
import { Menu, MenuItem, MenuLabel, MenuSeparator } from './menu.ui';

describe('Menu', () => {
  afterEach(cleanup);

  it('SHOULD expose a collapsed menu button WHEN closed', () => {
    const { getByRole, queryByRole } = render(
      <Menu trigger={<Button>Options</Button>}>
        <MenuItem>Rename</MenuItem>
      </Menu>,
    );
    const trigger = getByRole('button', { name: 'Options' });

    expect(trigger.getAttribute('aria-haspopup')).toBe('menu');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(queryByRole('menu')).toBeNull();
  });

  it('SHOULD render menu items, a label, and a separator WHEN open', () => {
    const { getByRole, getAllByRole, getByText } = render(
      <Menu defaultOpen trigger={<Button>Options</Button>}>
        <MenuLabel>Project</MenuLabel>
        <MenuItem>Rename</MenuItem>
        <MenuSeparator />
        <MenuItem color={MENU_ITEM_COLORS.ERROR}>Delete</MenuItem>
        <MenuItem disabled>Transfer</MenuItem>
      </Menu>,
    );

    expect(getByRole('menu')).toBeDefined();
    expect(getAllByRole('menuitem')).toHaveLength(3);
    expect(getByText('Project')).toBeDefined();
    expect(getByRole('separator')).toBeDefined();
    expect(getByRole('menuitem', { name: 'Delete' }).getAttribute('data-color')).toBe('error');
    expect(getByRole('menuitem', { name: 'Transfer' }).getAttribute('aria-disabled')).toBe('true');
  });

  it('SHOULD call onSelect WHEN an item is chosen', () => {
    const handleSelect = vi.fn();
    const { getByRole } = render(
      <Menu defaultOpen trigger={<Button>Options</Button>}>
        <MenuItem onSelect={handleSelect}>Rename</MenuItem>
      </Menu>,
    );

    fireEvent.click(getByRole('menuitem', { name: 'Rename' }));

    expect(handleSelect).toHaveBeenCalledOnce();
  });
});
