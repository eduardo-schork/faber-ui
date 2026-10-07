import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

type TFieldControlProps = Pick<
  ComponentPropsWithoutRef<'input'>,
  'id' | 'aria-describedby' | 'aria-invalid'
>;

export type TFieldProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  readonly children: ReactElement<TFieldControlProps>;
  readonly description?: ReactNode;
  readonly error?: ReactNode;
  readonly invalid?: boolean;
  readonly label: ReactNode;
};
