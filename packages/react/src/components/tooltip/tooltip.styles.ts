import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import {
  COLORS,
  CONTAINER_SIZES,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  RADII,
  SHADOWS,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { floatingMotionStyles } from '../../internal/motion-styles';

export const TooltipContent = styled(TooltipPrimitive.Content).attrs({
  className: 'faber-ui-tooltip-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  max-width: calc(${CONTAINER_SIZES.SMALL} * 0.4);
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
  border-radius: ${RADII.SM};
  color: ${COLORS.BACKGROUND_PRIMARY};
  background-color: ${COLORS.TEXT_PRIMARY};
  box-shadow: ${SHADOWS.SM};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  ${floatingMotionStyles}
`;
