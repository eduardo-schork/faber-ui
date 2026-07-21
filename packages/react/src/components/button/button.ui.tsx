import { forwardRef } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';
import {
  ButtonContent,
  ButtonIcon,
  ButtonLabel,
  ButtonSpinner,
  StyledButton,
} from './button.styles';
import type { TButtonProps } from './button.types';

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(function Button(
  {
    children,
    color = BUTTON_COLORS.PRIMARY,
    disabled,
    endIcon,
    fullWidth = false,
    loading = false,
    size = BUTTON_SIZES.MEDIUM,
    startIcon,
    type = 'button',
    variant = BUTTON_VARIANTS.FILLED,
    ...nativeProps
  },
  ref,
) {
  const isDisabled = loading ? true : disabled;

  return (
    <StyledButton
      {...nativeProps}
      ref={ref}
      type={type}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      data-color={color}
      data-full-width={fullWidth || undefined}
      data-loading={loading || undefined}
      data-size={size}
      data-variant={variant}
    >
      {loading ? <ButtonSpinner aria-hidden="true" data-button-spinner /> : null}
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
    </StyledButton>
  );
});
