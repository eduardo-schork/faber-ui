import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Switch } from './switch.ui';

const ConsumerSwitch = styled(Switch)``;

describe('Switch', () => {
  afterEach(cleanup);

  it('SHOULD render a labeled native checkbox with switch semantics and forward its ref', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(<Switch label="Notifications" name="notifications" ref={ref} />);
    const control = getByRole('switch', { name: 'Notifications' }) as HTMLInputElement;

    expect(control.type).toBe('checkbox');
    expect(control.name).toBe('notifications');
    expect(ref.current).toBe(control);
  });

  it('SHOULD preserve native uncontrolled state and change events', () => {
    const onChange = vi.fn();
    const { getByRole } = render(<Switch label="Dark mode" onChange={onChange} />);
    const control = getByRole('switch', { name: 'Dark mode' }) as HTMLInputElement;

    fireEvent.click(control);

    expect(control.checked).toBe(true);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD expose description, validation and styled-components composition', () => {
    const { getByRole, getByText } = render(
      <ConsumerSwitch
        className="consumer"
        label="Sync"
        description="Keeps devices aligned."
        error="Sync is unavailable."
      />,
    );
    const control = getByRole('switch', { name: 'Sync' });
    const description = getByText('Keeps devices aligned.');
    const error = getByText('Sync is unavailable.');

    expect(control.getAttribute('aria-invalid')).toBe('true');
    expect(control.getAttribute('aria-describedby')).toBe(`${description.id} ${error.id}`);
    expect(control.closest('.consumer')).not.toBeNull();
  });
});
