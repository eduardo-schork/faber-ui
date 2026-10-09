import * as SelectPrimitive from '@radix-ui/react-select';
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
  SIZES,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FIELD_FOCUS_GROWTH, fieldFocusStyles } from '../../internal/field-focus-styles';

/* Drawn like the other text fields, so a Listbox and an Input line up in a form. */
export const ListboxTrigger = styled(SelectPrimitive.Trigger).attrs({
  className: 'faber-ui-listbox',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS};
  box-sizing: border-box;
  width: 100%;
  min-width: ${SPACINGS.NONE};
  height: ${SIZES.MD};
  padding-block: ${SPACINGS.NONE};
  padding-inline: ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};
  text-align: start;
  cursor: pointer;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  /* The value is the first child; it gives way to the icon when space runs out. */
  > span:first-child {
    min-width: ${SPACINGS.NONE};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-placeholder] {
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
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ListboxIcon = styled(SelectPrimitive.Icon).attrs({
  className: 'faber-ui-listbox-icon',
})`
  display: inline-flex;
  flex: none;
  color: ${COLORS.TEXT_SECONDARY};
  transition: transform ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  [data-state='open'] > & {
    transform: rotate(calc(${ANIMATIONS.ROTATION_FULL} / 2));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* As wide as the trigger, and never taller than the room left in the viewport. */
export const ListboxContent = styled(SelectPrimitive.Content).attrs({
  className: 'faber-ui-listbox-content',
})`
  z-index: ${Z_INDICES.OVERLAY};
  box-sizing: border-box;
  width: var(--radix-select-trigger-width);
  max-height: min(calc(${SIZES.XXL} * 4), var(--radix-select-content-available-height));
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const ListboxViewport = styled(SelectPrimitive.Viewport).attrs({
  className: 'faber-ui-listbox-viewport',
})`
  padding: ${SPACINGS.XXS};
`;

export const StyledListboxOption = styled(SelectPrimitive.Item).attrs({
  className: 'faber-ui-listbox-option',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS};
  min-height: ${SIZES.SM};
  padding: ${SPACINGS.NONE} ${SPACINGS.XS};
  border-radius: ${RADII.SM};
  cursor: pointer;
  user-select: none;

  /* Radix moves real focus to the highlighted option, so this covers pointer and keyboard. */
  &[data-highlighted] {
    outline: none;
    background-color: color-mix(
      in srgb,
      ${COLORS.TEXT_PRIMARY} ${OPACITIES.INTERACTION_LIGHT},
      transparent
    );
  }

  &[data-state='checked'] {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &[data-disabled] {
    color: ${COLORS.TEXT_DISABLED};
    cursor: not-allowed;
  }
`;

export const ListboxOptionIndicator = styled(SelectPrimitive.ItemIndicator).attrs({
  className: 'faber-ui-listbox-option-indicator',
})`
  display: inline-flex;
  flex: none;
  color: ${COLORS.PRIMARY};
`;

export const StyledListboxGroup = styled(SelectPrimitive.Group).attrs({
  className: 'faber-ui-listbox-group',
})``;

export const ListboxGroupLabel = styled(SelectPrimitive.Label).attrs({
  className: 'faber-ui-listbox-group-label',
})`
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
`;

export const StyledListboxSeparator = styled(SelectPrimitive.Separator).attrs({
  className: 'faber-ui-listbox-separator',
})`
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: ${SPACINGS.XXS} calc(${SPACINGS.XXS} * -1);
  background-color: ${COLORS.BORDER_DEFAULT};
`;
