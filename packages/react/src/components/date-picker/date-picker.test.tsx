import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Field } from '../field';
import { DatePicker } from './date-picker.ui';

describe('DatePicker', () => {
  afterEach(cleanup);

  it('SHOULD show a placeholder on a collapsed button WHEN no day is selected', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByRole, queryByRole } = render(
      <DatePicker ref={ref} aria-label="Start date" placeholder="Pick a day" />,
    );
    const trigger = getByRole('button', { name: 'Start date' });

    expect(ref.current).toBe(trigger);
    expect(trigger.classList.contains('faber-ui-date-picker')).toBe(true);
    expect(trigger.textContent).toContain('Pick a day');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(queryByRole('table')).toBeNull();
  });

  it('SHOULD format the selected day and submit it as an ISO date', () => {
    const { container, getByRole } = render(
      <form>
        <DatePicker aria-label="Start date" locale="en-US" name="start" defaultValue="2026-03-15" />
      </form>,
    );

    expect(getByRole('button', { name: 'Start date' }).textContent).toContain('Mar 15, 2026');
    expect(new FormData(container.querySelector('form') ?? undefined).get('start')).toBe(
      '2026-03-15',
    );
  });

  it('SHOULD open a calendar, report the chosen day, and close', () => {
    const onValueChange = vi.fn();
    const { getByRole, queryByRole } = render(
      <DatePicker
        aria-label="Start date"
        locale="en-US"
        defaultValue="2026-03-15"
        onValueChange={onValueChange}
      />,
    );

    fireEvent.click(getByRole('button', { name: 'Start date' }));
    expect(getByRole('table')).toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Friday, March 20, 2026' }));

    expect(onValueChange).toHaveBeenCalledWith('2026-03-20');
    expect(queryByRole('table')).toBeNull();
    expect(getByRole('button', { name: 'Start date' }).textContent).toContain('Mar 20, 2026');
  });

  it('SHOULD take its label and error from Field', () => {
    const { getByRole, getByText } = render(
      <Field label="Start date" error="Choose a day.">
        <DatePicker />
      </Field>,
    );
    const trigger = getByRole('button', { name: 'Start date' });

    expect(trigger.getAttribute('aria-invalid')).toBe('true');
    expect(trigger.getAttribute('aria-describedby')).toContain(getByText('Choose a day.').id);
  });

  it('SHOULD not open WHEN disabled', () => {
    const { getByRole, queryByRole } = render(<DatePicker aria-label="Start date" disabled />);

    fireEvent.click(getByRole('button', { name: 'Start date' }));

    expect(queryByRole('table')).toBeNull();
  });
});
