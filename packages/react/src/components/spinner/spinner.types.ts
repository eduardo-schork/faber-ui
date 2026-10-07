import type { ComponentPropsWithoutRef } from 'react';

import type { TSpinnerSize } from './spinner.constants';

type TSpinnerAccessibilityProps =
  | {
      readonly decorative: true;
      readonly label?: never;
    }
  | {
      readonly decorative?: false;
      readonly label: string;
    };

export type TSpinnerProps = Omit<
  ComponentPropsWithoutRef<'span'>,
  'aria-hidden' | 'aria-label' | 'children' | 'role'
> &
  TSpinnerAccessibilityProps & {
    readonly size?: TSpinnerSize;
  };
