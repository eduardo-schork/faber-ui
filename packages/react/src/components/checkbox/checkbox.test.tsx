import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Checkbox } from './checkbox.ui';

const ConsumerCheckbox = styled(Checkbox)``;

describe('Checkbox', () => {
  afterEach(cleanup);

  it('SHOULD render a labeled native checkbox and forward its input ref', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<Checkbox label="Accept terms" name="terms" ref={ref} required />);
    const control = getByRole('checkbox', { name: 'Accept terms' }) as HTMLInputElement;

    expect(control.type).toBe('checkbox');
    expect(control.name).toBe('terms');
    expect(control.required).toBe(true);
    expect(ref.current).toBe(control);
  });

  it('SHOULD preserve native uncontrolled state and change events', () => {
    const onChange = vi.fn();
    const { getByRole, getByText } = render(
      <Checkbox label="Updates" defaultChecked onChange={onChange} />,
    );
    const control = getByRole('checkbox', { name: 'Updates' }) as HTMLInputElement;

    expect(control.checked).toBe(true);
    fireEvent.click(getByText('Updates'));
    expect(control.checked).toBe(false);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD preserve controlled and disabled native state', () => {
    const { getByRole } = render(
      <Checkbox label="Locked" checked disabled onChange={() => undefined} />,
    );
    const control = getByRole('checkbox', { name: 'Locked' }) as HTMLInputElement;

    expect(control.checked).toBe(true);
    expect(control.disabled).toBe(true);
  });

  it('SHOULD connect description and validation error without losing an existing description', () => {
    const { getByRole, getByText } = render(
      <>
        <span id="external-help">External help</span>
        <Checkbox
          aria-describedby="external-help"
          label="Accept terms"
          description="Required for an account."
          error="Please accept the terms."
        />
      </>,
    );
    const control = getByRole('checkbox', { name: 'Accept terms' });
    const description = getByText('Required for an account.');
    const error = getByText('Please accept the terms.');

    expect(control.getAttribute('aria-invalid')).toBe('true');
    expect(control.getAttribute('aria-describedby')).toBe(
      `external-help ${description.id} ${error.id}`,
    );
    expect(error.getAttribute('aria-live')).toBe('polite');
  });

  it('SHOULD hide an error WHEN invalid is explicitly false', () => {
    const { getByRole, queryByText } = render(
      <Checkbox label="Accept terms" invalid={false} error="Old error" />,
    );

    expect(getByRole('checkbox', { name: 'Accept terms' }).hasAttribute('aria-invalid')).toBe(
      false,
    );
    expect(queryByText('Old error')).toBeNull();
  });

  it('SHOULD accept a styled-components wrapper class', () => {
    const { getByRole } = render(<ConsumerCheckbox label="Updates" className="consumer" />);
    const control = getByRole('checkbox', { name: 'Updates' });

    expect(control.closest('.consumer')).not.toBeNull();
  });
});
