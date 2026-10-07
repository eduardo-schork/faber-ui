import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Input } from './input.ui';

const ConsumerInput = styled(Input)``;

describe('Input', () => {
  afterEach(cleanup);

  it('SHOULD render a native text control and forward its ref', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<Input ref={ref} aria-label="Name" />);
    const input = getByRole('textbox', { name: 'Name' });

    expect(input.tagName).toBe('INPUT');
    expect(input.getAttribute('type')).toBeNull();
    expect(ref.current).toBe(input);
  });

  it('SHOULD preserve native attributes and events', () => {
    const onChange = vi.fn();
    const { getByRole } = render(
      <Input
        aria-label="Email"
        autoComplete="email"
        name="email"
        onChange={onChange}
        placeholder="you@example.com"
        required
        type="email"
      />,
    );
    const input = getByRole('textbox', { name: 'Email' });

    fireEvent.change(input, { target: { value: 'a@example.com' } });

    expect(input.getAttribute('autocomplete')).toBe('email');
    expect(input.getAttribute('name')).toBe('email');
    expect(input.hasAttribute('required')).toBe(true);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD preserve controlled and uncontrolled native input behavior', () => {
    const { getByRole, unmount } = render(<Input aria-label="Query" defaultValue="initial" />);
    const input = getByRole('textbox', { name: 'Query' }) as HTMLInputElement;

    expect(input.value).toBe('initial');

    unmount();
    const controlled = render(
      <Input aria-label="Query" value="controlled" onChange={() => undefined} />,
    );

    expect((controlled.getByRole('textbox', { name: 'Query' }) as HTMLInputElement).value).toBe(
      'controlled',
    );
  });

  it('SHOULD preserve native disabled and validation attributes', () => {
    const { getByRole } = render(<Input aria-label="Code" aria-invalid disabled />);
    const input = getByRole('textbox', { name: 'Code' });

    expect(input.hasAttribute('disabled')).toBe(true);
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('SHOULD remain composable with styled-components', () => {
    const { getByRole } = render(<ConsumerInput aria-label="Search" className="consumer-input" />);
    const input = getByRole('textbox', { name: 'Search' });

    expect(input.classList.contains('consumer-input')).toBe(true);
    expect(input.classList.length).toBeGreaterThan(1);
  });
});
