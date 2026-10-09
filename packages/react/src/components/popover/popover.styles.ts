import * as PopoverPrimitive from '@radix-ui/react-popover';
import {
  BORDER_WIDTHS,
  COLORS,
  CONTAINER_SIZES,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SHADOWS,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { floatingMotionStyles } from '../../internal/motion-styles';

export const PopoverContent = styled(PopoverPrimitive.Content).attrs({
  className: 'faber-ui-popover-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  box-sizing: border-box;
  width: max-content;
  max-width: min(
    calc(${CONTAINER_SIZES.SMALL} * 0.5),
    var(--radix-popover-content-available-width)
  );
  padding: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  box-shadow: ${SHADOWS.MD};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  ${floatingMotionStyles}
`;
