import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { addMonths, fromIsoDate, getMonthWeeks, toIsoDate } from './calendar-dates';
import { Calendar } from './calendar.ui';

const dayButton = (container: HTMLElement, date: string) => {
  const button = container.querySelector<HTMLButtonElement>(`[data-date="${date}"]`);

  if (button === null) {
    throw new Error(`Expected a day for ${date}.`);
  }

  return button;
};

describe('Calendar', () => {
  afterEach(cleanup);

  it('SHOULD show the month of the selected day with weekday headers', () => {
    const { container, getAllByRole, getByText } = render(
      <Calendar locale="en-US" value="2026-03-15" />,
    );

    expect(getByText('March 2026')).toBeDefined();
    expect(getAllByRole('columnheader')).toHaveLength(7);
    expect(dayButton(container, '2026-03-15').getAttribute('aria-pressed')).toBe('true');
    expect(dayButton(container, '2026-03-15').getAttribute('aria-label')).toBe(
      'Sunday, March 15, 2026',
    );
    expect(dayButton(container, '2026-03-15').tabIndex).toBe(0);
    expect(dayButton(container, '2026-03-16').tabIndex).toBe(-1);
  });

  it('SHOULD report the day that is clicked', () => {
    const onValueChange = vi.fn();
    const { container } = render(
      <Calendar locale="en-US" defaultValue="2026-03-15" onValueChange={onValueChange} />,
    );

    fireEvent.click(dayButton(container, '2026-03-20'));

    expect(onValueChange).toHaveBeenCalledWith('2026-03-20');
    expect(dayButton(container, '2026-03-20').getAttribute('aria-pressed')).toBe('true');
  });

  it('SHOULD move between months from the navigation buttons', () => {
    const { getByRole, getByText } = render(<Calendar locale="en-US" value="2026-03-15" />);

    fireEvent.click(getByRole('button', { name: 'Next month' }));
    expect(getByText('April 2026')).toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Previous month' }));
    fireEvent.click(getByRole('button', { name: 'Previous month' }));
    expect(getByText('February 2026')).toBeDefined();
  });

  it('SHOULD move focus with the arrow, Home, End, and page keys', () => {
    const { container, getByRole, getByText } = render(
      <Calendar locale="en-US" value="2026-03-15" />,
    );
    const grid = getByRole('table');

    fireEvent.keyDown(grid, { key: 'ArrowRight' });
    expect(document.activeElement).toBe(dayButton(container, '2026-03-16'));

    fireEvent.keyDown(grid, { key: 'ArrowDown' });
    expect(document.activeElement).toBe(dayButton(container, '2026-03-23'));

    fireEvent.keyDown(grid, { key: 'Home' });
    expect(document.activeElement).toBe(dayButton(container, '2026-03-22'));

    fireEvent.keyDown(grid, { key: 'End' });
    expect(document.activeElement).toBe(dayButton(container, '2026-03-28'));

    fireEvent.keyDown(grid, { key: 'PageDown' });
    expect(getByText('April 2026')).toBeDefined();
    expect(document.activeElement).toBe(dayButton(container, '2026-04-28'));
  });

  it('SHOULD disable days outside the allowed range and keep focus inside it', () => {
    const { container, getByRole } = render(
      <Calendar locale="en-US" value="2026-03-15" min="2026-03-10" max="2026-03-16" />,
    );

    expect(dayButton(container, '2026-03-09').disabled).toBe(true);
    expect(dayButton(container, '2026-03-17').disabled).toBe(true);

    fireEvent.keyDown(getByRole('table'), { key: 'ArrowDown' });
    expect(dayButton(container, '2026-03-15').tabIndex).toBe(0);
  });

  it('SHOULD start the week on Monday WHEN asked', () => {
    const { getAllByRole } = render(
      <Calendar locale="en-US" value="2026-03-15" weekStartsOn={1} />,
    );

    expect(getAllByRole('columnheader')[0]?.textContent).toBe('Mon');
  });
});

describe('calendar dates', () => {
  it('SHOULD round-trip ISO dates and reject invalid ones', () => {
    expect(toIsoDate(fromIsoDate('2026-02-28') ?? new Date(0))).toBe('2026-02-28');
    expect(fromIsoDate('2026-02-30')).toBeUndefined();
    expect(fromIsoDate('yesterday')).toBeUndefined();
  });

  it('SHOULD clamp the day WHEN the target month is shorter', () => {
    expect(toIsoDate(addMonths(fromIsoDate('2026-01-31') ?? new Date(0), 1))).toBe('2026-02-28');
  });

  it('SHOULD cover a month with whole weeks', () => {
    const weeks = getMonthWeeks(fromIsoDate('2026-03-15') ?? new Date(0), 0);

    expect(weeks).toHaveLength(5);
    expect(toIsoDate(weeks[0]?.[0] ?? new Date(0))).toBe('2026-03-01');
    expect(toIsoDate(weeks[4]?.[6] ?? new Date(0))).toBe('2026-04-04');
  });
});
