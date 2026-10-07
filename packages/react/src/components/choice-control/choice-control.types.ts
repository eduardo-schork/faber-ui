import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TChoiceControlProps = Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'> & {
  readonly description?: ReactNode;
  readonly error?: ReactNode;
  readonly invalid?: boolean;
  readonly label: ReactNode;
};
