import { forwardRef } from 'react';

import { SPINNER_SIZES } from '../spinner';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import {
  ButtonContent,
  ButtonIcon,
  ButtonLabel,
  ButtonSpinner,
  StyledButton,
} from './button.styles';
import type { TButtonProps, TButtonRootProps } from './button.types';

export const ButtonRoot = forwardRef<HTMLButtonElement, TButtonRootProps>(function ButtonRoot(
  {
    color = BUTTON_COLORS.PRIMARY,
    disabled,
    fullWidth = false,
    loading = false,
    size = BUTTON_SIZES.MEDIUM,
    type = 'button',
    variant = BUTTON_VARIANTS.FILLED,
    ...nativeProps
  },
  ref,
) {
  return (
    <StyledButton
      {...nativeProps}
      ref={ref}
      type={type}
      aria-busy={loading || undefined}
      disabled={loading ? true : disabled}
      data-color={color}
      data-full-width={fullWidth || undefined}
      data-loading={loading || undefined}
      data-size={size}
      data-variant={variant}
    />
  );
});

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(function Button(
  { children, endIcon, loading = false, startIcon, ...rootProps },
  ref,
) {
  return (
    <ButtonRoot {...rootProps} ref={ref} loading={loading}>
      {loading ? (
        <ButtonSpinner decorative size={SPINNER_SIZES.CURRENT} data-button-spinner />
      ) : null}
      <ButtonContent data-button-content>
        {startIcon ? (
          <ButtonIcon aria-hidden="true" data-button-icon="start">
            {startIcon}
          </ButtonIcon>
        ) : null}
        <ButtonLabel data-button-label>{children}</ButtonLabel>
        {endIcon ? (
          <ButtonIcon aria-hidden="true" data-button-icon="end">
            {endIcon}
          </ButtonIcon>
        ) : null}
      </ButtonContent>
    </ButtonRoot>
  );
});
