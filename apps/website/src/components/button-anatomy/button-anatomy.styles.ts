import {
  ANIMATIONS,
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  COLORS,
  DescriptionList,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/react';
import styled from 'styled-components';

import { Frame, captionText } from '@/components/sheet/sheet.styles';

// Drawing geometry. These lengths position annotation lines around the measured subject and are
// specific to this figure, so they are not design tokens.
const DIMENSION_GAP = SPACINGS.SM;
const DIMENSION_DEPTH = '9px';
const DIMENSION_CENTER = '4px';
const LEADER_LENGTH = SPACINGS.XL;
const GRID_PITCH = SPACINGS.LG;

export const AnatomyFigure = styled(Frame)`
  margin: ${SPACINGS.NONE};
`;

export const AnatomyStage = styled(Grid)`
  --anatomy-scale: 2;
  --half-width: calc(var(--subject-width, 0) * var(--anatomy-scale) * 0.5px);
  --half-height: calc(var(--subject-height, 0) * var(--anatomy-scale) * 0.5px);
  --padding-length: calc(var(--subject-padding, 0) * var(--anatomy-scale) * 1px);
  --grid-line: color-mix(
    in srgb,
    ${COLORS.BORDER_DEFAULT} ${OPACITIES.DISABLED_BACKGROUND},
    transparent
  );

  position: relative;
  place-items: center;
  height: calc(${SIZES.XXL} * 4);
  overflow: hidden;
  background-image:
    linear-gradient(
      var(--grid-line) ${BORDER_WIDTHS.DEFAULT},
      transparent ${BORDER_WIDTHS.DEFAULT}
    ),
    linear-gradient(
      90deg,
      var(--grid-line) ${BORDER_WIDTHS.DEFAULT},
      transparent ${BORDER_WIDTHS.DEFAULT}
    );
  background-position: center;
  background-size: ${GRID_PITCH} ${GRID_PITCH};

  [data-annotation] {
    position: absolute;
    transition: opacity ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};
  }

  &:not([data-measured]) [data-annotation] {
    opacity: ${OPACITIES.HIDDEN};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    --anatomy-scale: 1.5;
  }
`;

export const AnatomySubject = styled(Box)`
  transform: scale(var(--anatomy-scale));
`;

export const HeightDimension = styled(Box)`
  top: calc(50% - var(--half-height));
  left: calc(50% + var(--half-width) + ${DIMENSION_GAP});
  width: ${DIMENSION_DEPTH};
  height: calc(var(--half-height) * 2);
  border-block: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.ACCENT};

  &::before {
    position: absolute;
    inset-block: ${SPACINGS.NONE};
    left: ${DIMENSION_CENTER};
    width: ${BORDER_WIDTHS.DEFAULT};
    background: ${COLORS.ACCENT};
    content: '';
  }

  > span {
    top: 50%;
    left: calc(100% + ${SPACINGS.XS});
    transform: translateY(-50%);
  }
`;

export const PaddingDimension = styled(Box)`
  top: calc(50% + var(--half-height) + ${DIMENSION_GAP});
  left: calc(50% - var(--half-width));
  width: var(--padding-length);
  height: ${DIMENSION_DEPTH};
  border-inline: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.ACCENT};

  &::before {
    position: absolute;
    inset-inline: ${SPACINGS.NONE};
    top: ${DIMENSION_CENTER};
    height: ${BORDER_WIDTHS.DEFAULT};
    background: ${COLORS.ACCENT};
    content: '';
  }

  > span {
    top: calc(100% + ${SPACINGS.XXS});
    left: ${SPACINGS.NONE};
  }
`;

const Leader = styled(Box)`
  top: calc(50% - var(--half-height) - ${LEADER_LENGTH});
  width: ${BORDER_WIDTHS.DEFAULT};
  height: ${LEADER_LENGTH};
  background: ${COLORS.ACCENT};

  &::after {
    position: absolute;
    bottom: -2px;
    left: -2px;
    width: 5px;
    height: 5px;
    border-radius: ${RADII.FULL};
    background: ${COLORS.ACCENT};
    content: '';
  }

  > span {
    bottom: calc(100% + ${SPACINGS.XXS});
  }
`;

export const RadiusLeader = styled(Leader)`
  left: calc(50% - var(--half-width) + ${BORDER_WIDTHS.STRONG});

  > span {
    right: ${SPACINGS.NONE};
    text-align: right;
  }
`;

export const TypeLeader = styled(Leader)`
  left: calc(50% + var(--half-width) * 0.3);

  > span {
    left: ${SPACINGS.NONE};
  }
`;

export const AnnotationLabel = styled(Grid).attrs({ forwardedAs: 'span' })`
  ${captionText}
  position: absolute;
  color: ${COLORS.TEXT_SECONDARY};
  font-size: calc(${FONT_SIZES.XS} - 1px);
  line-height: ${LINE_HEIGHTS.TIGHT};
  white-space: nowrap;

  strong {
    color: ${COLORS.TEXT_PRIMARY};
    font-size: ${FONT_SIZES.XS};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
`;

export const AnatomyControls = styled(Grid)`
  gap: ${SPACINGS.XS};
  padding: ${SPACINGS.MD};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const TitleBlock = styled(DescriptionList)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: ${SPACINGS.NONE};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};

  > div {
    display: grid;
    gap: ${SPACINGS.XXS};
    min-width: ${SPACINGS.NONE};
    padding: ${SPACINGS.SM};
    border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    border-inline-start: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  }

  > div:nth-child(-n + 3) {
    border-top: ${BORDER_WIDTHS.NONE};
  }

  > div:nth-child(3n + 1) {
    border-inline-start: ${BORDER_WIDTHS.NONE};
  }

  dt {
    ${captionText}
    color: ${COLORS.TEXT_SECONDARY};
    font-size: calc(${FONT_SIZES.XS} - 1px);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  dd {
    ${captionText}
    display: grid;
    margin: ${SPACINGS.NONE};
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    overflow-wrap: anywhere;
  }

  dd span {
    color: ${COLORS.TEXT_SECONDARY};
    font-size: calc(${FONT_SIZES.XS} - 1px);
    font-weight: ${FONT_WEIGHTS.REGULAR};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > div:nth-child(-n + 3) {
      border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    }

    > div:nth-child(-n + 2) {
      border-top: ${BORDER_WIDTHS.NONE};
    }

    > div:nth-child(3n + 1) {
      border-inline-start: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    }

    > div:nth-child(2n + 1) {
      border-inline-start: ${BORDER_WIDTHS.NONE};
    }
  }
`;
