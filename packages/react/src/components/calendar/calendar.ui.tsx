import { forwardRef, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button/button.constants';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_WEIGHTS } from '../typography/typography.constants';
import {
  addDays,
  addMonths,
  fromIsoDate,
  getMonthWeeks,
  isOutOfRange,
  toIsoDate,
} from './calendar-dates';
import {
  CalendarDay,
  CalendarGrid,
  CalendarHeader,
  CalendarNavigation,
  CalendarRoot,
  CalendarTitle,
} from './calendar.styles';
import type { TCalendarProps } from './calendar.types';

const DAYS_IN_WEEK = 7;

/** How far each key moves the focused day. Page keys move by months and are handled apart. */
const DAY_STEPS: Readonly<Record<string, number>> = {
  ArrowDown: DAYS_IN_WEEK,
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -DAYS_IN_WEEK,
};

function Chevron({ direction }: { readonly direction: 'next' | 'previous' }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="16"
    >
      <path d={direction === 'next' ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
    </svg>
  );
}

export const Calendar = forwardRef<HTMLDivElement, TCalendarProps>(function Calendar(
  {
    focusOnMount = false,
    defaultValue,
    locale,
    max,
    min,
    nextMonthLabel = 'Next month',
    onValueChange,
    previousMonthLabel = 'Previous month',
    value,
    weekStartsOn = 0,
    ...rootProps
  },
  ref,
) {
  const titleId = useId();
  const gridRef = useRef<HTMLTableElement>(null);
  const shouldFocus = useRef(focusOnMount);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedValue = value ?? internalValue;
  const [focusedDate, setFocusedDate] = useState(
    () => fromIsoDate(selectedValue) ?? fromIsoDate(toIsoDate(new Date())) ?? new Date(),
  );
  const focusedValue = toIsoDate(focusedDate);
  const today = toIsoDate(new Date());

  const visibleYear = focusedDate.getFullYear();
  const visibleMonth = focusedDate.getMonth();

  // The grid only changes when the visible month does, not on every focused day.
  const { monthTitle, weekdayNames, weeks } = useMemo(() => {
    const month = new Date(visibleYear, visibleMonth, 1, 12);
    const monthWeeks = getMonthWeeks(month, weekStartsOn);
    const weekdayFormat = new Intl.DateTimeFormat(locale, { weekday: 'short' });
    const weekdayLongFormat = new Intl.DateTimeFormat(locale, { weekday: 'long' });

    return {
      monthTitle: new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month),
      weekdayNames: (monthWeeks[0] ?? []).map((day) => ({
        long: weekdayLongFormat.format(day),
        short: weekdayFormat.format(day),
      })),
      weeks: monthWeeks,
    };
  }, [locale, visibleMonth, visibleYear, weekStartsOn]);

  const dayLabelFormat = useMemo(
    () => new Intl.DateTimeFormat(locale, { dateStyle: 'full' }),
    [locale],
  );

  // Focus follows the focused day after keyboard movement, including across months.
  useEffect(() => {
    if (shouldFocus.current) {
      shouldFocus.current = false;
      gridRef.current?.querySelector<HTMLButtonElement>(`[data-date="${focusedValue}"]`)?.focus();
    }
  }, [focusedValue]);

  const moveFocus = (next: Date) => {
    if (!isOutOfRange(next, min, max)) {
      shouldFocus.current = true;
      setFocusedDate(next);
    }
  };

  const showMonth = (amount: number) => {
    setFocusedDate(addMonths(focusedDate, amount));
  };

  const select = (day: Date) => {
    const next = toIsoDate(day);

    setFocusedDate(day);
    setInternalValue(next);
    onValueChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTableElement>) => {
    const step = DAY_STEPS[event.key];
    const weekday = (focusedDate.getDay() - weekStartsOn + DAYS_IN_WEEK) % DAYS_IN_WEEK;
    const next =
      step !== undefined
        ? addDays(focusedDate, step)
        : event.key === 'Home'
          ? addDays(focusedDate, -weekday)
          : event.key === 'End'
            ? addDays(focusedDate, DAYS_IN_WEEK - 1 - weekday)
            : event.key === 'PageUp'
              ? addMonths(focusedDate, -1)
              : event.key === 'PageDown'
                ? addMonths(focusedDate, 1)
                : undefined;

    if (next !== undefined) {
      event.preventDefault();
      moveFocus(next);
    }
  };

  return (
    <CalendarRoot {...rootProps} ref={ref}>
      <CalendarHeader>
        <CalendarNavigation
          aria-label={previousMonthLabel}
          color={BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.SUBTLE}
          onClick={() => {
            showMonth(-1);
          }}
        >
          <Chevron direction="previous" />
        </CalendarNavigation>
        <CalendarTitle
          id={titleId}
          aria-live="polite"
          size={TYPOGRAPHY_SIZES.SMALLER}
          weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}
        >
          {monthTitle}
        </CalendarTitle>
        <CalendarNavigation
          aria-label={nextMonthLabel}
          color={BUTTON_COLORS.NEUTRAL}
          size={BUTTON_SIZES.SMALL}
          variant={BUTTON_VARIANTS.SUBTLE}
          onClick={() => {
            showMonth(1);
          }}
        >
          <Chevron direction="next" />
        </CalendarNavigation>
      </CalendarHeader>

      <CalendarGrid ref={gridRef} aria-labelledby={titleId} onKeyDown={handleKeyDown}>
        <thead>
          <tr>
            {weekdayNames.map(({ long, short }) => (
              <th key={long} abbr={long} scope="col">
                {short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week) => (
            <tr key={toIsoDate(week[0] ?? focusedDate)}>
              {week.map((day) => {
                const dayValue = toIsoDate(day);

                return (
                  <td key={dayValue}>
                    <CalendarDay
                      type="button"
                      aria-label={dayLabelFormat.format(day)}
                      aria-pressed={dayValue === selectedValue}
                      data-date={dayValue}
                      data-outside={day.getMonth() !== visibleMonth || undefined}
                      data-today={dayValue === today || undefined}
                      disabled={isOutOfRange(day, min, max)}
                      tabIndex={dayValue === focusedValue ? 0 : -1}
                      onClick={() => {
                        select(day);
                      }}
                    >
                      {day.getDate()}
                    </CalendarDay>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </CalendarGrid>
    </CalendarRoot>
  );
});
