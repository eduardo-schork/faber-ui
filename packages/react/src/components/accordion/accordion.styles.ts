import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { riseInStyles } from '../../internal/motion-styles';
import { Box } from '../box';
import { FLEX_ALIGNS, FLEX_JUSTIFIES, HFlex, VFlex } from '../flex';

export const StyledAccordion = styled(VFlex).attrs({ className: 'faber-ui-accordion' })`
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const AccordionItemRoot = styled.details.attrs({ className: 'faber-ui-accordion-item' })`
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const AccordionSummary = styled(HFlex).attrs({
  className: 'faber-ui-accordion-summary',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'summary',
  gap: 'MD',
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})`
  padding-block: ${SPACINGS.SM};
  font-size: ${FONT_SIZES.MD};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NORMAL};
  list-style: none;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    flex: none;
    width: ${SPACINGS.XS};
    height: ${SPACINGS.XS};
    border-right: ${BORDER_WIDTHS.STRONG} solid ${COLORS.TEXT_SECONDARY};
    border-bottom: ${BORDER_WIDTHS.STRONG} solid ${COLORS.TEXT_SECONDARY};
    content: '';
    transform: rotate(calc(${ANIMATIONS.ROTATION_FULL} / 8));
    transition: transform ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};
  }

  ${AccordionItemRoot}[open] > &::after {
    transform: rotate(calc(${ANIMATIONS.ROTATION_FULL} * -3 / 8));
  }

  &:focus-visible {
    border-radius: ${FOCUS_RINGS.RADIUS};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`;

export const AccordionContent = styled(Box).attrs({ className: 'faber-ui-accordion-content' })`
  padding-bottom: ${SPACINGS.MD};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  ${riseInStyles}
`;
