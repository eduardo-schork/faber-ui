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
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled, { css } from 'styled-components';

import { FLEX_ALIGNS, FLEX_JUSTIFIES, HFlex } from '../flex';
import { Spinner } from '../spinner';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from './button.constants';

/** Shared by Button and LinkButton so an action and a navigation link stay visually identical. */
export const buttonStyles = css`
  --button-color: ${COLORS.PRIMARY};
  --button-color-hover: ${COLORS.PRIMARY_HOVER};
  --button-color-active: ${COLORS.PRIMARY_ACTIVE};
  --button-on-tint: color-mix(
    in srgb,
    var(--button-color) ${OPACITIES.TEXT_ON_TINT},
    ${COLORS.TEXT_PRIMARY}
  );
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

  &[data-color='${BUTTON_COLORS.NEUTRAL}'] {
    --button-color: ${COLORS.TEXT_PRIMARY};
    --button-color-hover: ${COLORS.TEXT_SECONDARY};
    --button-color-active: ${COLORS.TEXT_SECONDARY};
    --button-on-color: ${COLORS.BACKGROUND_PRIMARY};
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

  /* Text on a tint of its own color leans toward the text color to stay readable in both themes. */
  &[data-variant='${BUTTON_VARIANTS.LIGHT}'] {
    color: var(--button-on-tint);
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
      color: var(--button-on-tint);
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
      color: var(--button-on-tint);
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

export const StyledButton = styled.button.attrs({ className: 'faber-ui-button' })`
  ${buttonStyles}
`;

export const ButtonContent = styled(HFlex).attrs({
  className: 'faber-ui-button-content',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'span',
  gap: 'XS',
  inline: true,
  justify: FLEX_JUSTIFIES.CENTER,
})`
  max-width: 100%;
`;

export const ButtonIcon = styled(HFlex).attrs({
  className: 'faber-ui-button-icon',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'span',
  inline: true,
  justify: FLEX_JUSTIFIES.CENTER,
})`
  flex: 0 0 auto;
  line-height: ${LINE_HEIGHTS.ZERO};
`;

/* The label clips for truncation, so it needs a line box tall enough for descenders. */
export const ButtonLabel = styled(HFlex).attrs({
  className: 'faber-ui-button-label',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'span',
  inline: true,
  justify: FLEX_JUSTIFIES.CENTER,
})`
  overflow: hidden;
  line-height: ${LINE_HEIGHTS.NORMAL};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonSpinner = styled(Spinner).attrs({ className: 'faber-ui-button-spinner' })`
  position: absolute;
`;
