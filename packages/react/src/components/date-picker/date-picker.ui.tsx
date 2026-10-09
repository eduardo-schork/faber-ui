import * as PopoverPrimitive from '@radix-ui/react-popover';
import { SPACING_SCALE } from '@faber-ui/tokens';
import { forwardRef, useMemo, useState } from 'react';

import { Calendar, fromIsoDate, type TIsoDate } from '../calendar';
import { DatePickerContent, DatePickerIcon, DatePickerTrigger } from './date-picker.styles';
import type { TDatePickerProps } from './date-picker.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XXS, 10);

function CalendarIcon() {
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
      <rect height="18" rx="2" width="18" x="3" y="4" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export const DatePicker = forwardRef<HTMLButtonElement, TDatePickerProps>(function DatePicker(
  {
    defaultOpen = false,
    defaultValue,
    disabled,
    locale,
    max,
    min,
    name,
    nextMonthLabel,
    onOpenChange,
    onValueChange,
    open,
    placeholder = 'Select a date',
    previousMonthLabel,
    value,
    weekStartsOn,
    ...triggerProps
  },
  ref,
) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isOpen = open ?? internalOpen;
  const selectedValue = value ?? internalValue;
  const selectedDate = fromIsoDate(selectedValue);
  const displayFormat = useMemo(
    () => new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }),
    [locale],
  );

  const changeOpen = (nextOpen: boolean) => {
    setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  const select = (nextValue: TIsoDate) => {
    setInternalValue(nextValue);
    onValueChange?.(nextValue);
    changeOpen(false);
  };

  return (
    <PopoverPrimitive.Root open={isOpen} onOpenChange={changeOpen}>
      <PopoverPrimitive.Trigger asChild>
        <DatePickerTrigger
          {...triggerProps}
          ref={ref}
          type="button"
          data-placeholder={selectedDate === undefined || undefined}
          disabled={disabled}
        >
          <span>
            {selectedDate === undefined ? placeholder : displayFormat.format(selectedDate)}
          </span>
          <DatePickerIcon>
            <CalendarIcon />
          </DatePickerIcon>
        </DatePickerTrigger>
      </PopoverPrimitive.Trigger>
      {name === undefined ? null : (
        <input type="hidden" name={name} value={selectedValue ?? ''} disabled={disabled} />
      )}
      <PopoverPrimitive.Portal>
        <DatePickerContent align="start" sideOffset={SIDE_OFFSET}>
          <Calendar
            focusOnMount
            {...(locale === undefined ? {} : { locale })}
            {...(max === undefined ? {} : { max })}
            {...(min === undefined ? {} : { min })}
            {...(nextMonthLabel === undefined ? {} : { nextMonthLabel })}
            {...(previousMonthLabel === undefined ? {} : { previousMonthLabel })}
            {...(selectedValue === undefined ? {} : { value: selectedValue })}
            {...(weekStartsOn === undefined ? {} : { weekStartsOn })}
            onValueChange={select}
          />
        </DatePickerContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
});
