import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type TNativeTriggerProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children' | 'defaultValue' | 'dir' | 'name' | 'onChange' | 'type' | 'value'
>;

export type TListboxProps = TNativeTriggerProps & {
  /** `ListboxOption`, `ListboxGroup`, and `ListboxSeparator` elements. */
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
  readonly defaultValue?: string;
  /** Submits the selected value with the surrounding form. */
  readonly name?: string;
  readonly onOpenChange?: (open: boolean) => void;
  readonly onValueChange?: (value: string) => void;
  readonly open?: boolean;
  /** Shown while no option is selected. */
  readonly placeholder?: ReactNode;
  readonly required?: boolean;
  readonly value?: string;
};

export type TListboxOptionProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  /** The option text. It is also what the trigger shows when the option is selected. */
  readonly children: ReactNode;
  readonly disabled?: boolean;
  /** Text matched while typing, when the content is not plain text. */
  readonly textValue?: string;
  readonly value: string;
};

export type TListboxGroupProps = ComponentPropsWithoutRef<'div'> & {
  readonly label: ReactNode;
};

export type TListboxSeparatorProps = ComponentPropsWithoutRef<'div'>;
