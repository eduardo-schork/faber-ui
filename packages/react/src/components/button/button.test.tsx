import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Button } from './button.ui';

describe('Button', () => {
  afterEach(cleanup);

  it('renders accessible defaults', () => {
    const { getByRole } = render(<Button>Save</Button>);
    const button = getByRole('button', { name: 'Save' });

    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('data-color')).toBe('primary');
    expect(button.getAttribute('data-size')).toBe('medium');
    expect(button.getAttribute('data-variant')).toBe('filled');
    expect(button.hasAttribute('data-full-width')).toBe(false);
  });

  it('forwards native props and click events', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button type="submit" aria-label="Submit form" onClick={handleClick}>
        Submit
      </Button>,
    );
    const button = getByRole('button', { name: 'Submit form' });

    fireEvent.click(button);

    expect(button.getAttribute('type')).toBe('submit');
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('prevents interaction when disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button disabled onClick={handleClick}>
        Save
      </Button>,
    );

    fireEvent.click(getByRole('button', { name: 'Save' }));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards the button ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Save</Button>);

    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('supports full-width layouts', () => {
    const { getByRole } = render(<Button fullWidth>Continue</Button>);

    expect(getByRole('button', { name: 'Continue' }).getAttribute('data-full-width')).toBe('true');
  });

  it('renders decorative start and end icons around the label', () => {
    const { getByRole } = render(
      <Button startIcon={<span>start</span>} endIcon={<span>end</span>}>
        Continue
      </Button>,
    );
    const button = getByRole('button', { name: 'Continue' });
    const startIcon = button.querySelector('[data-button-icon="start"]');
    const endIcon = button.querySelector('[data-button-icon="end"]');

    expect(startIcon?.getAttribute('aria-hidden')).toBe('true');
    expect(endIcon?.getAttribute('aria-hidden')).toBe('true');
    expect(startIcon?.nextElementSibling?.textContent).toBe('Continue');
    expect(endIcon?.previousElementSibling?.textContent).toBe('Continue');
  });

  it('preserves its label and blocks interaction while loading', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button loading onClick={handleClick}>
        Save
      </Button>,
    );
    const button = getByRole('button', { name: 'Save' });

    fireEvent.click(button);

    expect(button.getAttribute('aria-busy')).toBe('true');
    expect(button.hasAttribute('disabled')).toBe(true);
    expect(button.getAttribute('data-loading')).toBe('true');
    expect(button.querySelector('[data-button-spinner]')?.getAttribute('aria-hidden')).toBe('true');
    expect(button.querySelector('[data-button-content]')).not.toBeNull();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
