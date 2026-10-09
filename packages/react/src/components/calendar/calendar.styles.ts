import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  OPACITIES,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { Button } from '../button';
import { HFlex, VFlex } from '../flex';
import { Text } from '../text';

export const CalendarRoot = styled(VFlex).attrs({ className: 'faber-ui-calendar' })`
  gap: ${SPACINGS.XS};
  width: fit-content;
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const CalendarHeader = styled(HFlex).attrs({ className: 'faber-ui-calendar-header' })`
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS};
`;

export const CalendarTitle = styled(Text.Span).attrs({ className: 'faber-ui-calendar-title' })`
  text-transform: capitalize;
`;

export const CalendarNavigation = styled(Button).attrs({
  className: 'faber-ui-calendar-navigation',
})`
  flex: none;
`;

export const CalendarGrid = styled.table.attrs({ className: 'faber-ui-calendar-grid' })`
  border-collapse: collapse;
  font-size: ${FONT_SIZES.SM};

  th {
    width: ${SIZES.SM};
    height: ${SIZES.SM};
    padding: ${SPACINGS.NONE};
    color: ${COLORS.TEXT_SECONDARY};
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    text-transform: capitalize;
  }

  td {
    padding: ${SPACINGS.NONE};
  }
`;

export const CalendarDay = styled.button.attrs({ className: 'faber-ui-calendar-day' })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${SIZES.SM};
  height: ${SIZES.SM};
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.DEFAULT} solid transparent;
  border-radius: ${RADII.MD};
  color: inherit;
  background-color: transparent;
  font: inherit;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[data-outside='true'] {
    color: ${COLORS.TEXT_SECONDARY};
  }

  &[data-today='true'] {
    border-color: ${COLORS.BORDER_STRONG};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &[aria-pressed='true'] {
    border-color: ${COLORS.PRIMARY};
    color: ${COLORS.ON_PRIMARY};
    background-color: ${COLORS.PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &:disabled {
    color: ${COLORS.TEXT_DISABLED};
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  @media (hover: hover) {
    &:hover:not(:disabled):not([aria-pressed='true']) {
      background-color: color-mix(
        in srgb,
        ${COLORS.TEXT_PRIMARY} ${OPACITIES.INTERACTION_LIGHT},
        transparent
      );
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
