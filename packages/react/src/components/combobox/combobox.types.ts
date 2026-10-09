import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TComboboxOption = {
  readonly disabled?: boolean;
  /** The text shown in the list and matched against what the reader types. */
  readonly label: string;
  readonly value: string;
};

type TComboboxBaseProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'children' | 'defaultValue' | 'multiple' | 'onChange' | 'role' | 'type' | 'value'
> & {
  /** Shown in the list when nothing matches the typed text. */
  readonly emptyMessage?: ReactNode;
  /** Submits the selected value, or one entry per selected value, with the surrounding form. */
  readonly name?: string;
  readonly options: readonly TComboboxOption[];
  /** Builds the accessible name of the remove button of each selected value. */
  readonly removeLabel?: (label: string) => string;
};

export type TComboboxSingleProps = TComboboxBaseProps & {
  readonly defaultValue?: string;
  readonly multiple?: false;
  readonly onValueChange?: (value: string) => void;
  readonly value?: string;
};

export type TComboboxMultipleProps = TComboboxBaseProps & {
  readonly defaultValue?: readonly string[];
  /** Lets the reader pick several values, shown as removable chips. */
  readonly multiple: true;
  readonly onValueChange?: (value: string[]) => void;
  readonly value?: readonly string[];
};

export type TComboboxProps = TComboboxMultipleProps | TComboboxSingleProps;
