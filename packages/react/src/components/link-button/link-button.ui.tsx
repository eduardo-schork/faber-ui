import { forwardRef } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button/button.constants';
import { ButtonContent, ButtonIcon, ButtonLabel } from '../button/button.styles';
import { StyledLinkButton } from './link-button.styles';
import type { TLinkButtonProps } from './link-button.types';

export const LinkButton = forwardRef<HTMLAnchorElement, TLinkButtonProps>(function LinkButton(
  {
    as = 'a',
    children,
    color = BUTTON_COLORS.PRIMARY,
    endIcon,
    fullWidth = false,
    size = BUTTON_SIZES.MEDIUM,
    startIcon,
    variant = BUTTON_VARIANTS.FILLED,
    ...nativeProps
  },
  ref,
) {
  return (
    <StyledLinkButton
      {...nativeProps}
      as={as}
      ref={ref}
      data-color={color}
      data-full-width={fullWidth || undefined}
      data-size={size}
      data-variant={variant}
    >
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
    </StyledLinkButton>
  );
});
