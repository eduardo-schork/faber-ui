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
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FIELD_FOCUS_GROWTH, fieldFocusStyles } from '../../internal/field-focus-styles';

export const StyledInput = styled.input.attrs({ className: 'faber-ui-input' })`
  display: block;
  width: 100%;
  min-width: ${SPACINGS.NONE};
  height: ${SIZES.MD};
  padding-inline: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &::placeholder {
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
      border-color: ${COLORS.BORDER_STRONG};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
