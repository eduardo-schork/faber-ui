import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TSegmentedControlSize } from './segmented-control.constants';

export type TSegmentedControlProps = Omit<ComponentPropsWithoutRef<'fieldset'>, 'children'> & {
  readonly children: ReactNode;
  readonly label: ReactNode;
  /** Keeps the label available to assistive technology without displaying it. */
  readonly labelHidden?: boolean;
  readonly size?: TSegmentedControlSize;
};

export type TSegmentProps = Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'> & {
  readonly children: ReactNode;
  readonly name: string;
  readonly value: string;
};
