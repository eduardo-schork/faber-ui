import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';

export type TButtonVariant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type TButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type TButtonColor = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];

/** The button element with its variants and states, and no fixed content structure. */
export type TButtonRootProps = Omit<ComponentPropsWithoutRef<'button'>, 'color'> & {
  readonly color?: TButtonColor;
  readonly fullWidth?: boolean;
  readonly loading?: boolean;
  readonly size?: TButtonSize;
  readonly variant?: TButtonVariant;
};

export type TButtonProps = TButtonRootProps & {
  readonly endIcon?: ReactNode;
  readonly startIcon?: ReactNode;
};
