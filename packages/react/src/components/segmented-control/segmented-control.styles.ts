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
import styled from 'styled-components';

import { HFlex } from '../flex';
import { Text } from '../text';
import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';

import { SEGMENTED_CONTROL_SIZES } from './segmented-control.constants';

export const StyledSegmentedControl = styled.fieldset.attrs({
  className: 'faber-ui-segmented-control',
})`
  display: grid;
  justify-items: start;
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const SegmentedControlLabel = styled.legend.attrs({
  className: 'faber-ui-segmented-control-label',
})`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-hidden='true'] {
    position: absolute;
    width: ${BORDER_WIDTHS.DEFAULT};
    height: ${BORDER_WIDTHS.DEFAULT};
    margin: calc(${BORDER_WIDTHS.DEFAULT} * -1);
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;

export const SegmentedControlOptions = styled(HFlex).attrs({
  className: 'faber-ui-segmented-control-options',
  inline: true,
})`
  max-width: 100%;
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  background-color: ${COLORS.SURFACE_PRIMARY};
`;

export const SegmentLabel = styled(Text.Label).attrs({
  className: 'faber-ui-segment-label',
  tone: TYPOGRAPHY_TONES.INHERIT,
})`
  position: relative;
  display: inline-flex;
  min-width: ${SPACINGS.NONE};

  & + & {
    border-inline-start: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  }
`;

export const SegmentInput = styled.input.attrs({ className: 'faber-ui-segment-input' })`
  position: absolute;
  inset: ${SPACINGS.NONE};
  width: 100%;
  height: 100%;
  margin: ${SPACINGS.NONE};
  opacity: ${OPACITIES.HIDDEN};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const SegmentText = styled(Text.Span).attrs({
  className: 'faber-ui-segment-text',
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
  weight: TYPOGRAPHY_WEIGHTS.MEDIUM,
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: ${SIZES.MD};
  padding-inline: ${SPACINGS.MD};
  overflow: hidden;
  line-height: ${LINE_HEIGHTS.NONE};
  text-overflow: ellipsis;
  white-space: nowrap;
  transition:
    color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  [data-size='${SEGMENTED_CONTROL_SIZES.SMALL}'] & {
    min-height: ${SIZES.SM};
    padding-inline: ${SPACINGS.SM};
  }

  ${SegmentInput}:checked + & {
    color: ${COLORS.ON_PRIMARY};
    background-color: ${COLORS.PRIMARY};
    box-shadow: ${SHADOWS.SM};
  }

  ${SegmentInput}:focus-visible + & {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: calc(${FOCUS_RINGS.WIDTH} * -1);
  }

  ${SegmentInput}:disabled + & {
    color: ${COLORS.TEXT_DISABLED};
  }

  @media (hover: hover) {
    ${SegmentInput}:not(:checked):not(:disabled):hover + & {
      color: ${COLORS.TEXT_PRIMARY};
      background-color: color-mix(
        in srgb,
        ${COLORS.TEXT_PRIMARY} ${OPACITIES.INTERACTION_SUBTLE_HOVER},
        transparent
      );
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
