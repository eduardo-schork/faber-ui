import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  OPACITIES,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';
import { Text } from '../text';

/* A label, so a click anywhere on the card selects the radio inside it. */
export const RadioCardRoot = styled.label.attrs({ className: 'faber-ui-radio-card' })`
  position: relative;
  display: flex;
  align-items: center;
  gap: ${SPACINGS.SM};
  box-sizing: border-box;
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  cursor: pointer;
  transition: border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  /* The inset shadow thickens the border without moving the content. */
  &:has(input:checked) {
    border-color: ${COLORS.PRIMARY};
    box-shadow: inset ${SPACINGS.NONE} ${SPACINGS.NONE} ${SPACINGS.NONE} ${BORDER_WIDTHS.DEFAULT}
      ${COLORS.PRIMARY};
  }

  &:has(input:focus-visible) {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &:has(input:disabled) {
    border-color: ${COLORS.BORDER_DEFAULT};
    color: ${COLORS.TEXT_DISABLED};
    background-color: ${COLORS.DISABLED_BACKGROUND};
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not(:has(input:checked, input:disabled)) {
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* The native radio keeps keyboard and form behavior; the card draws the selected state. */
export const RadioCardInput = styled.input.attrs({ className: 'faber-ui-radio-card-input' })`
  position: absolute;
  width: ${BORDER_WIDTHS.DEFAULT};
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: ${SPACINGS.NONE};
  opacity: ${OPACITIES.HIDDEN};
  pointer-events: none;
`;

export const RadioCardContent = styled(VFlex).attrs({ className: 'faber-ui-radio-card-content' })`
  flex: 1;
  min-width: ${SPACINGS.NONE};
`;

export const RadioCardLabel = styled(Text.Span).attrs({ className: 'faber-ui-radio-card-label' })``;

export const RadioCardDescription = styled(Text.Span).attrs({
  className: 'faber-ui-radio-card-description',
})``;
