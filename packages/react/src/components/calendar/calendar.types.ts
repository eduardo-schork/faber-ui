import type { ComponentPropsWithoutRef } from 'react';

import type { TIsoDate } from './calendar-dates';

export type TCalendarProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children' | 'defaultValue' | 'onChange'
> & {
  /** Moves keyboard focus to the selected day, or to today, when the calendar appears. */
  readonly focusOnMount?: boolean;
  readonly defaultValue?: TIsoDate;
  /** A BCP 47 language tag for month and weekday names. Defaults to the language of the reader. */
  readonly locale?: string;
  /** The last selectable day, as `YYYY-MM-DD`. */
  readonly max?: TIsoDate;
  /** The first selectable day, as `YYYY-MM-DD`. */
  readonly min?: TIsoDate;
  readonly nextMonthLabel?: string;
  readonly onValueChange?: (value: TIsoDate) => void;
  readonly previousMonthLabel?: string;
  /** The selected day, as `YYYY-MM-DD`. */
  readonly value?: TIsoDate;
  /** `0` starts the week on Sunday, `1` on Monday. Defaults to `0`. */
  readonly weekStartsOn?: 0 | 1;
};
