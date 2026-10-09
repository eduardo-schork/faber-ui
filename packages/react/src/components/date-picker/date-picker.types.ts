import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TCalendarProps, TIsoDate } from '../calendar';

type TNativeTriggerProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children' | 'defaultValue' | 'name' | 'onChange' | 'type' | 'value'
>;

type TCalendarOptions = Pick<
  TCalendarProps,
  'locale' | 'max' | 'min' | 'nextMonthLabel' | 'previousMonthLabel' | 'weekStartsOn'
>;

export type TDatePickerProps = TNativeTriggerProps &
  TCalendarOptions & {
    readonly defaultOpen?: boolean;
    readonly defaultValue?: TIsoDate;
    /** Submits the selected day with the surrounding form, as `YYYY-MM-DD`. */
    readonly name?: string;
    readonly onOpenChange?: (open: boolean) => void;
    readonly onValueChange?: (value: TIsoDate) => void;
    readonly open?: boolean;
    /** Shown while no day is selected. */
    readonly placeholder?: ReactNode;
    /** The selected day, as `YYYY-MM-DD`. */
    readonly value?: TIsoDate;
  };
