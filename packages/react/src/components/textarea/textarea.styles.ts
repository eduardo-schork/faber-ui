import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledTextarea = styled.textarea.attrs({ className: 'faber-ui-textarea' })`
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-width: ${SPACINGS.NONE};
  min-height: ${SIZES.LG};
  padding: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};
  resize: vertical;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &::placeholder {
    color: ${COLORS.TEXT_SECONDARY};
  }

  &:focus-visible {
    border-color: ${COLORS.BORDER_STRONG};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &[aria-invalid='true']:not(:disabled) {
    border-color: ${COLORS.ERROR};

    &:focus-visible {
      outline-color: ${COLORS.ERROR};
    }
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
