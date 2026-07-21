import { forwardRef } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button/button.constants';
import { ButtonContent, ButtonIcon, ButtonSpinner } from '../button/button.styles';
import { StyledIconButton } from './icon-button.styles';
import type { TIconButtonProps } from './icon-button.types';

export const IconButton = forwardRef<HTMLButtonElement, TIconButtonProps>(function IconButton(
  {
    'aria-label': ariaLabel,
    children,
    color = BUTTON_COLORS.PRIMARY,
    disabled,
    loading = false,
    size = BUTTON_SIZES.MEDIUM,
    type = 'button',
    variant = BUTTON_VARIANTS.FILLED,
    ...nativeProps
  },
  ref,
) {
  const isDisabled = loading ? true : disabled;

  return (
    <StyledIconButton
      {...nativeProps}
      ref={ref}
      type={type}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      disabled={isDisabled}
      data-color={color}
      data-loading={loading || undefined}
      data-size={size}
      data-variant={variant}
    >
      {loading ? <ButtonSpinner aria-hidden="true" data-button-spinner /> : null}
      <ButtonContent aria-hidden="true" data-button-content>
        <ButtonIcon data-icon-button-icon>{children}</ButtonIcon>
      </ButtonContent>
    </StyledIconButton>
  );
});
