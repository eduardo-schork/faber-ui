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
  SHADOWS,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled, { keyframes } from 'styled-components';

import { VFlex } from '../flex';
import { Text } from '../text';
import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';

/* The mark of a checkbox or radio grows into place when the control is checked. */
const markIn = keyframes`
  from {
    opacity: ${OPACITIES.HIDDEN};
    transform: scale(calc(${ANIMATIONS.SCALE_ENTER} / 2));
  }
`;

export const ChoiceControlRoot = styled(VFlex).attrs({
  className: 'faber-ui-choice-control',
  gap: 'XXS',
})`
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-disabled='true'] {
    color: ${COLORS.TEXT_DISABLED};
  }
`;

export const ChoiceControlLabel = styled(Text.Label).attrs({
  className: 'faber-ui-choice-control-label',
  tone: TYPOGRAPHY_TONES.INHERIT,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
})`
  display: inline-flex;
  align-items: flex-start;
  gap: ${SPACINGS.XS};
  width: fit-content;
  cursor: pointer;

  ${ChoiceControlRoot}[data-disabled='true'] & {
    cursor: not-allowed;
  }
`;

export const ChoiceControlInput = styled.input.attrs({
  className: 'faber-ui-choice-control-input',
})`
  display: inline-grid;
  place-content: center;
  flex: none;
  box-sizing: border-box;
  width: ${SIZES.XXS};
  height: ${SIZES.XXS};
  margin: ${SPACINGS.XXS} ${SPACINGS.NONE} ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.SM};
  color: ${COLORS.ON_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  appearance: none;
  cursor: pointer;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[type='radio'] {
    border-radius: ${RADII.FULL};
  }

  /* The thumb starts at the inline start and travels exactly its own width, leaving an equal
     gap between the thumb and the track border on every side. */
  &[data-control='switch'] {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    width: ${SIZES.MD};
    height: ${SIZES.XS};
    margin: ${SPACINGS.NONE};
    padding: calc(${SPACINGS.XXS} - ${BORDER_WIDTHS.DEFAULT});
    border-radius: ${RADII.FULL};
  }

  &::after {
    display: none;
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.BOLD};
    line-height: ${LINE_HEIGHTS.NONE};
    content: '✓';
  }

  &[type='radio']::after {
    width: ${SPACINGS.XS};
    height: ${SPACINGS.XS};
    border-radius: ${RADII.FULL};
    background-color: currentColor;
    content: '';
  }

  &[data-control='switch']::after {
    display: block;
    flex: none;
    width: ${SIZES.XXS};
    height: ${SIZES.XXS};
    border-radius: ${RADII.FULL};
    background-color: ${COLORS.TEXT_SECONDARY};
    box-shadow: ${SHADOWS.SM};
    content: '';
    transition:
      transform ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
      background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};
  }

  &:checked {
    border-color: ${COLORS.PRIMARY};
    background-color: ${COLORS.PRIMARY};

    &::after {
      display: block;
    }
  }

  &:checked:not([data-control='switch'])::after {
    animation: ${markIn} ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_ENTER};
  }

  &[data-control='switch']:checked::after {
    background-color: ${COLORS.ON_PRIMARY};
    transform: translateX(${SIZES.XXS});
  }

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &[aria-invalid='true']:not(:disabled) {
    border-color: ${COLORS.ERROR};

    &:focus-visible {
      outline-color: ${COLORS.ERROR};
    }
  }

  &:disabled {
    border-color: ${COLORS.BORDER_DEFAULT};
    background-color: ${COLORS.DISABLED_BACKGROUND};
    cursor: not-allowed;

    &:checked {
      color: ${COLORS.TEXT_DISABLED};
    }
  }

  @media (hover: hover) {
    &:hover:not(:disabled):not(:checked) {
      border-color: ${COLORS.PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::after {
      transition: none;
    }

    &:checked:not([data-control='switch'])::after {
      animation: none;
    }
  }

  @media (forced-colors: active) {
    appearance: auto;

    &::after {
      display: none;
    }
  }
`;

export const ChoiceControlDescription = styled(Text.P).attrs({
  className: 'faber-ui-choice-control-description',
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
})`
  padding-inline-start: calc(${SIZES.XXS} + ${SPACINGS.XS});

  ${ChoiceControlRoot}[data-control='switch'] & {
    padding-inline-start: calc(${SIZES.MD} + ${SPACINGS.XS});
  }
`;

export const ChoiceControlError = styled(ChoiceControlDescription).attrs({
  className: 'faber-ui-choice-control-error',
})`
  color: ${COLORS.ERROR};
`;
