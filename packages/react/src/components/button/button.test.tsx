import { cleanup, fireEvent, render } from '@testing-library/react';
import { SPACINGS } from '@faber-ui/tokens';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { ButtonIcon, ButtonLabel } from './button.styles';
import { Button, ButtonRoot } from './button.ui';

const ConsumerButton = styled(Button)`
  margin-inline: ${SPACINGS.SM};
`;

describe('Button', () => {
  afterEach(cleanup);

  it('SHOULD render accessible defaults', () => {
    const { getByRole } = render(<Button>Save</Button>);
    const button = getByRole('button', { name: 'Save' });

    expect(button.getAttribute('type')).toBe('button');
    expect(button.getAttribute('data-color')).toBe('primary');
    expect(button.getAttribute('data-size')).toBe('medium');
    expect(button.getAttribute('data-variant')).toBe('filled');
    expect(button.hasAttribute('data-full-width')).toBe(false);
  });

  it('SHOULD forward native props and click events', () => {
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

  it('SHOULD preserve className composition WHEN wrapped by styled-components', () => {
    const { getByRole } = render(<ConsumerButton className="consumer-button">Save</ConsumerButton>);
    const button = getByRole('button', { name: 'Save' });

    expect(button.classList.contains('consumer-button')).toBe(true);
    expect(button.classList.length).toBeGreaterThan(1);
  });

  it('SHOULD prevent interaction WHEN disabled', () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button disabled onClick={handleClick}>
        Save
      </Button>,
    );

    fireEvent.click(getByRole('button', { name: 'Save' }));

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('SHOULD expose the neutral color through its data attribute', () => {
    const { getByRole } = render(<Button color="neutral">Cancel</Button>);

    expect(getByRole('button', { name: 'Cancel' }).getAttribute('data-color')).toBe('neutral');
  });

  it('SHOULD expose stable class names on the root and on each part', () => {
    const { getByRole } = render(
      <Button className="consumer" startIcon={<span>icon</span>}>
        Save
      </Button>,
    );
    const button = getByRole('button', { name: 'Save' });

    expect(button.classList.contains('faber-ui-button')).toBe(true);
    expect(button.classList.contains('consumer')).toBe(true);
    expect(button.querySelector('.faber-ui-button-content')).not.toBeNull();
    expect(button.querySelector('.faber-ui-button-icon')).not.toBeNull();
    expect(button.querySelector('.faber-ui-button-label')?.textContent).toBe('Save');
  });

  it('SHOULD forward the button ref', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Save</Button>);

    expect(ref.current?.tagName).toBe('BUTTON');
  });

  it('SHOULD support full-width layouts', () => {
    const { getByRole } = render(<Button fullWidth>Continue</Button>);

    expect(getByRole('button', { name: 'Continue' }).getAttribute('data-full-width')).toBe('true');
  });

  it('SHOULD render decorative start and end icons around the label', () => {
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

  it('SHOULD preserve its label and block interaction WHEN loading', () => {
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

  it('SHOULD let a consumer assemble a button from its parts', () => {
    const { getByRole } = render(
      <ButtonRoot variant="outline" size="small">
        <ButtonLabel>Two lines</ButtonLabel>
        <ButtonIcon aria-hidden="true">→</ButtonIcon>
      </ButtonRoot>,
    );
    const button = getByRole('button', { name: 'Two lines' });

    expect(button.getAttribute('data-variant')).toBe('outline');
    expect(button.getAttribute('type')).toBe('button');
    expect(button.querySelector('[data-button-content]')).toBeNull();
    expect(button.lastElementChild?.classList.contains('faber-ui-button-icon')).toBe(true);
  });
});
