import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  RELATIVE_SIZES,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled, { keyframes } from 'styled-components';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';

const rotate = keyframes`
  to {
    transform: rotate(${ANIMATIONS.ROTATION_FULL});
  }
`;

export const StyledButton = styled.button`
  --button-color: ${COLORS.PRIMARY};
  --button-color-hover: ${COLORS.PRIMARY_HOVER};
  --button-color-active: ${COLORS.PRIMARY_ACTIVE};
  --button-on-color: ${COLORS.ON_PRIMARY};

  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-width: 0;
  height: ${SIZES.MD};
  padding: ${SPACINGS.NONE} ${SPACINGS.MD};
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid transparent;
  border-radius: ${RADII.MD};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NONE};
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  appearance: none;
  cursor: pointer;
  user-select: none;
  transition:
    color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[data-color='${BUTTON_COLORS.ACCENT}'] {
    --button-color: ${COLORS.ACCENT};
    --button-color-hover: ${COLORS.ACCENT_HOVER};
    --button-color-active: ${COLORS.ACCENT_ACTIVE};
    --button-on-color: ${COLORS.ON_ACCENT};
  }

  &[data-size='${BUTTON_SIZES.SMALL}'] {
    height: ${SIZES.SM};
    padding-inline: ${SPACINGS.SM};
    font-size: ${FONT_SIZES.SM};
  }

  &[data-size='${BUTTON_SIZES.LARGE}'] {
    height: ${SIZES.LG};
    padding-inline: ${SPACINGS.LG};
    font-size: ${FONT_SIZES.MD};
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-variant='${BUTTON_VARIANTS.FILLED}'] {
    color: var(--button-on-color);
    background-color: var(--button-color);

    &:active:not(:disabled) {
      background-color: var(--button-color-active);
    }
  }

  &[data-variant='${BUTTON_VARIANTS.LIGHT}'] {
    color: var(--button-color);
    background-color: color-mix(
      in srgb,
      var(--button-color) ${OPACITIES.INTERACTION_LIGHT},
      transparent
    );

    &:active:not(:disabled) {
      background-color: color-mix(
        in srgb,
        var(--button-color) ${OPACITIES.INTERACTION_LIGHT_ACTIVE},
        transparent
      );
    }
  }

  &[data-variant='${BUTTON_VARIANTS.OUTLINE}'] {
    color: var(--button-color);
    border-color: var(--button-color);
    background-color: transparent;

    &:active:not(:disabled) {
      background-color: color-mix(
        in srgb,
        var(--button-color) ${OPACITIES.INTERACTION_SUBTLE_ACTIVE},
        transparent
      );
    }
  }

  &[data-variant='${BUTTON_VARIANTS.SUBTLE}'] {
    color: var(--button-color);
    background-color: transparent;

    &:active:not(:disabled) {
      background-color: color-mix(
        in srgb,
        var(--button-color) ${OPACITIES.INTERACTION_SUBTLE_ACTIVE},
        transparent
      );
    }
  }

  &[data-loading='true'] > [data-button-content] {
    opacity: ${OPACITIES.HIDDEN};
  }

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:not([data-loading='true']) {
    color: ${COLORS.TEXT_DISABLED};
  }

  &[data-variant='${BUTTON_VARIANTS.FILLED}']:disabled:not([data-loading='true']) {
    border-color: transparent;
    background-color: ${COLORS.DISABLED_BACKGROUND};
  }

  &[data-variant='${BUTTON_VARIANTS.LIGHT}']:disabled:not([data-loading='true']) {
    border-color: transparent;
    background-color: color-mix(
      in srgb,
      ${COLORS.DISABLED_BACKGROUND} ${OPACITIES.DISABLED_BACKGROUND},
      transparent
    );
  }

  &[data-variant='${BUTTON_VARIANTS.OUTLINE}']:disabled:not([data-loading='true']) {
    border-color: ${COLORS.BORDER_DEFAULT};
    background-color: transparent;
  }

  &[data-variant='${BUTTON_VARIANTS.SUBTLE}']:disabled:not([data-loading='true']) {
    border-color: transparent;
    background-color: transparent;
  }

  &[data-loading='true'] {
    cursor: wait;
  }

  @media (hover: hover) {
    &[data-variant='${BUTTON_VARIANTS.FILLED}']:hover:not(:disabled) {
      background-color: var(--button-color-hover);
    }

    &[data-variant='${BUTTON_VARIANTS.LIGHT}']:hover:not(:disabled) {
      background-color: color-mix(
        in srgb,
        var(--button-color) ${OPACITIES.INTERACTION_LIGHT_HOVER},
        transparent
      );
    }

    &[data-variant='${BUTTON_VARIANTS.OUTLINE}']:hover:not(:disabled),
    &[data-variant='${BUTTON_VARIANTS.SUBTLE}']:hover:not(:disabled) {
      background-color: color-mix(
        in srgb,
        var(--button-color) ${OPACITIES.INTERACTION_SUBTLE_HOVER},
        transparent
      );
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const ButtonContent = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${SPACINGS.XS};
  max-width: 100%;
  min-width: 0;
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  line-height: ${LINE_HEIGHTS.ZERO};
`;

export const ButtonLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonSpinner = styled.span`
  position: absolute;
  width: ${RELATIVE_SIZES.CURRENT_FONT};
  height: ${RELATIVE_SIZES.CURRENT_FONT};
  border: ${BORDER_WIDTHS.STRONG} solid currentcolor;
  border-right-color: transparent;
  border-radius: ${RADII.FULL};
  animation: ${rotate} ${ANIMATIONS.DURATION_SPIN} ${ANIMATIONS.EASING_LINEAR} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
