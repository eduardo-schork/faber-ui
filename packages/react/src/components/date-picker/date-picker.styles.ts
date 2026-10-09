import * as PopoverPrimitive from '@radix-ui/react-popover';
import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SIZES,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FIELD_FOCUS_GROWTH, fieldFocusStyles } from '../../internal/field-focus-styles';
import { Box } from '../box';

/* Drawn like the other text fields, so a DatePicker and an Input line up in a form. */
export const DatePickerTrigger = styled.button.attrs({ className: 'faber-ui-date-picker' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS};
  box-sizing: border-box;
  width: 100%;
  min-width: ${SPACINGS.NONE};
  height: ${SIZES.MD};
  padding-block: ${SPACINGS.NONE};
  padding-inline: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};
  text-align: start;
  cursor: pointer;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[data-placeholder='true'] {
    color: ${COLORS.TEXT_SECONDARY};
  }

  ${fieldFocusStyles}

  &:focus-visible {
    padding-inline: calc(${SPACINGS.SM} - ${FIELD_FOCUS_GROWTH});
  }

  &[aria-invalid='true']:not(:disabled) {
    border-color: ${COLORS.ERROR};
  }

  &:disabled {
    color: ${COLORS.TEXT_DISABLED};
    background-color: ${COLORS.DISABLED_BACKGROUND};
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not(:disabled):not(:focus-visible) {
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DatePickerIcon = styled(Box).attrs({
  className: 'faber-ui-date-picker-icon',
  forwardedAs: 'span',
})`
  display: inline-flex;
  flex: none;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const DatePickerContent = styled(PopoverPrimitive.Content).attrs({
  className: 'faber-ui-date-picker-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  box-sizing: border-box;
  padding: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  background-color: ${COLORS.SURFACE_PRIMARY};
`;
