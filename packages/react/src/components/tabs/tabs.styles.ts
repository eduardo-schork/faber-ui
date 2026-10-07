import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { Box } from '../box';
import { HFlex, VFlex } from '../flex';

export const StyledTabs = styled(VFlex).attrs({ className: 'faber-ui-tabs', gap: 'MD' })`
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const StyledTabList = styled(HFlex).attrs({ className: 'faber-ui-tab-list', gap: 'LG' })`
  overflow-x: auto;
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const StyledTab = styled.button.attrs({ className: 'faber-ui-tab' })`
  flex: none;
  min-height: ${SIZES.MD};
  margin-bottom: calc(${BORDER_WIDTHS.DEFAULT} * -1);
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  border-bottom: ${BORDER_WIDTHS.STRONG} solid transparent;
  color: ${COLORS.TEXT_SECONDARY};
  background-color: transparent;
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  line-height: ${LINE_HEIGHTS.NORMAL};
  white-space: nowrap;
  cursor: pointer;
  transition:
    color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[aria-selected='true'] {
    border-bottom-color: ${COLORS.PRIMARY};
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &:focus-visible {
    border-radius: ${FOCUS_RINGS.RADIUS};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: calc(${FOCUS_RINGS.WIDTH} * -1);
  }

  &:disabled {
    color: ${COLORS.TEXT_DISABLED};
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledTabPanel = styled(Box).attrs({ className: 'faber-ui-tab-panel' })`
  min-width: ${SPACINGS.NONE};

  &:focus-visible {
    border-radius: ${FOCUS_RINGS.RADIUS};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }
`;
