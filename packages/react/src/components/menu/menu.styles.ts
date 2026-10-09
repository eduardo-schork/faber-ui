import * as MenuPrimitive from '@radix-ui/react-dropdown-menu';
import {
  BORDER_WIDTHS,
  COLORS,
  CONTAINER_SIZES,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SHADOWS,
  SIZES,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { floatingMotionStyles } from '../../internal/motion-styles';
import { MENU_ITEM_COLORS } from './menu.constants';

export const MenuContent = styled(MenuPrimitive.Content).attrs({
  className: 'faber-ui-menu-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  box-sizing: border-box;
  min-width: calc(${SIZES.XXL} * 2);
  max-width: min(
    calc(${CONTAINER_SIZES.SMALL} * 0.45),
    var(--radix-dropdown-menu-content-available-width)
  );
  padding: ${SPACINGS.XXS};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  box-shadow: ${SHADOWS.MD};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  ${floatingMotionStyles}
`;

export const StyledMenuItem = styled(MenuPrimitive.Item).attrs({ className: 'faber-ui-menu-item' })`
  --menu-item-color: ${COLORS.TEXT_PRIMARY};

  display: flex;
  align-items: center;
  gap: ${SPACINGS.XS};
  min-height: ${SIZES.SM};
  padding: ${SPACINGS.NONE} ${SPACINGS.XS};
  border-radius: ${RADII.SM};
  color: var(--menu-item-color);
  cursor: pointer;
  user-select: none;

  &[data-color='${MENU_ITEM_COLORS.ERROR}'] {
    --menu-item-color: ${COLORS.ERROR};
  }

  /* Radix moves real focus to the highlighted item, so this covers pointer and keyboard. */
  &[data-highlighted] {
    outline: none;
    background-color: color-mix(
      in srgb,
      var(--menu-item-color) ${OPACITIES.INTERACTION_LIGHT},
      transparent
    );
  }

  &[data-disabled] {
    color: ${COLORS.TEXT_DISABLED};
    cursor: not-allowed;
  }
`;

export const StyledMenuLabel = styled(MenuPrimitive.Label).attrs({
  className: 'faber-ui-menu-label',
})`
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
`;

export const StyledMenuSeparator = styled(MenuPrimitive.Separator).attrs({
  className: 'faber-ui-menu-separator',
})`
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: ${SPACINGS.XXS} calc(${SPACINGS.XXS} * -1);
  background-color: ${COLORS.BORDER_DEFAULT};
`;
