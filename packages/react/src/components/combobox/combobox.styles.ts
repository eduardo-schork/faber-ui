import * as PopoverPrimitive from '@radix-ui/react-popover';
import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
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

import { FIELD_FOCUS_GROWTH, fieldFocusDeclarations } from '../../internal/field-focus-styles';
import { floatingMotionStyles } from '../../internal/motion-styles';
import { Box } from '../box';
import { HFlex } from '../flex';
import { List, ListItem } from '../list';
import { LIST_MARKERS } from '../list/list.constants';

/* The frame of the field. It marks focus on behalf of the input, like the other text fields. */
export const ComboboxControl = styled(HFlex).attrs({ className: 'faber-ui-combobox' })`
  flex-wrap: wrap;
  align-items: center;
  gap: ${SPACINGS.XXS} ${SPACINGS.XS};
  box-sizing: border-box;
  width: 100%;
  min-width: ${SPACINGS.NONE};
  min-height: ${SIZES.MD};
  padding: ${SPACINGS.XXS} ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  cursor: text;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    box-shadow ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &:has(input:focus-visible) {
    ${fieldFocusDeclarations}
    padding: calc(${SPACINGS.XXS} - ${FIELD_FOCUS_GROWTH}) calc(${SPACINGS.SM} - ${FIELD_FOCUS_GROWTH});
  }

  &[data-invalid='true']:not([data-disabled='true']) {
    --field-focus-color: ${COLORS.ERROR};

    border-color: ${COLORS.ERROR};
    background-image: none;
  }

  &[data-disabled='true'] {
    color: ${COLORS.TEXT_DISABLED};
    background-color: ${COLORS.DISABLED_BACKGROUND};
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not([data-disabled='true']):not(:has(input:focus-visible)) {
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ComboboxInput = styled.input.attrs({ className: 'faber-ui-combobox-input' })`
  flex: 1;
  min-width: calc(${SIZES.XL} + ${SIZES.XS});
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  outline: none;
  color: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &::placeholder {
    color: ${COLORS.TEXT_SECONDARY};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ComboboxIcon = styled(Box).attrs({
  className: 'faber-ui-combobox-icon',
  forwardedAs: 'span',
})`
  display: inline-flex;
  flex: none;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const ComboboxChip = styled(HFlex).attrs({
  className: 'faber-ui-combobox-chip',
  forwardedAs: 'span',
})`
  align-items: center;
  gap: ${SPACINGS.XXS};
  padding-inline: ${SPACINGS.XS} ${SPACINGS.XXS};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};
  background-color: ${COLORS.BACKGROUND_PRIMARY};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const ComboboxChipRemove = styled.button.attrs({
  className: 'faber-ui-combobox-chip-remove',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  border-radius: ${RADII.SM};
  color: ${COLORS.TEXT_SECONDARY};
  background-color: transparent;
  font: inherit;
  line-height: ${LINE_HEIGHTS.NONE};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }
`;

/* As wide as the field, and never taller than the room left in the viewport. */
export const ComboboxContent = styled(PopoverPrimitive.Content).attrs({
  className: 'faber-ui-combobox-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  box-sizing: border-box;
  width: var(--radix-popover-trigger-width);
  max-height: min(calc(${SIZES.XXL} * 4), var(--radix-popover-content-available-height));
  overflow-y: auto;
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

export const ComboboxList = styled(List).attrs({
  className: 'faber-ui-combobox-list',
  marker: LIST_MARKERS.NONE,
})`
  gap: ${SPACINGS.NONE};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.XXS};
`;

export const ComboboxOption = styled(ListItem).attrs({ className: 'faber-ui-combobox-option' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS};
  min-height: ${SIZES.SM};
  padding: ${SPACINGS.NONE} ${SPACINGS.XS};
  border-radius: ${RADII.SM};
  cursor: pointer;
  user-select: none;

  /* Focus stays in the input; the active option is the one the keyboard is pointing at. */
  &[data-active='true'] {
    background-color: color-mix(
      in srgb,
      ${COLORS.TEXT_PRIMARY} ${OPACITIES.INTERACTION_LIGHT},
      transparent
    );
  }

  &[aria-selected='true'] {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &[aria-disabled='true'] {
    color: ${COLORS.TEXT_DISABLED};
    cursor: not-allowed;
  }
`;

export const ComboboxOptionIndicator = styled(Box).attrs({
  className: 'faber-ui-combobox-option-indicator',
  forwardedAs: 'span',
})`
  display: inline-flex;
  flex: none;
  color: ${COLORS.PRIMARY};
`;

export const ComboboxEmpty = styled(ListItem).attrs({ className: 'faber-ui-combobox-empty' })`
  padding: ${SPACINGS.XS};
  color: ${COLORS.TEXT_SECONDARY};
`;
