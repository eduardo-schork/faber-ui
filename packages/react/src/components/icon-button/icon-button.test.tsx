import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { IconButton } from './icon-button.ui';

describe('IconButton', () => {
  afterEach(cleanup);

  it('renders accessible defaults and a decorative icon', () => {
    const { getByRole } = render(<IconButton aria-label="Add item">+</IconButton>);
    const button = getByRole('button', { name: 'Add item' });

    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('data-color')).toBe('primary');
    expect(button.getAttribute('data-size')).toBe('medium');
    expect(button.getAttribute('data-variant')).toBe('filled');
    expect(button.querySelector('[data-button-content]')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('forwards native props and click events', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <IconButton aria-label="Add item" name="add-item" onClick={handleClick}>
        +
      </IconButton>,
    );
    const button = getByRole('button', { name: 'Add item' });

    fireEvent.click(button);

    expect(button.getAttribute('name')).toBe('add-item');
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('blocks interaction while disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <IconButton aria-label="Delete item" disabled onClick={handleClick}>
        ×
      </IconButton>,
    );

    fireEvent.click(getByRole('button', { name: 'Delete item' }));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('exposes its loading state and blocks interaction', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <IconButton aria-label="Refresh data" loading onClick={handleClick}>
        ↻
      </IconButton>,
    );
    const button = getByRole('button', { name: 'Refresh data' });

    fireEvent.click(button);

    expect(button.getAttribute('aria-busy')).toBe('true');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.querySelector('[data-button-spinner]')).not.toBeNull();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards the button ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(
      <IconButton ref={ref} aria-label="Add item">
        +
      </IconButton>,
    );

    expect(ref.current?.tagName).toBe('BUTTON');
  });
});
