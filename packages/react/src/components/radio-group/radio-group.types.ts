import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TRadioGroupProps = Omit<ComponentPropsWithoutRef<'fieldset'>, 'children'> & {
  readonly children: ReactNode;
  readonly description?: ReactNode;
  readonly error?: ReactNode;
  readonly invalid?: boolean;
  readonly label: ReactNode;
};
