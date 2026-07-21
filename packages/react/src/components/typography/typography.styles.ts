import {
  ANIMATIONS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
  TEXT_DECORATIONS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from './typography.constants';

export const StyledTypography = styled.span`
  --typography-color: ${COLORS.TEXT_PRIMARY};
  --typography-link-hover: var(--typography-color);
  --typography-link-active: var(--typography-color);

  margin: ${SPACINGS.NONE};
  color: var(--typography-color);
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  font-style: normal;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  line-height: ${LINE_HEIGHTS.NORMAL};
  overflow-wrap: break-word;

  &[data-size='${TYPOGRAPHY_SIZES.SMALLEST}'] {
    font-size: ${FONT_SIZES.XS};
  }

  &[data-size='${TYPOGRAPHY_SIZES.SMALLER}'] {
    font-size: ${FONT_SIZES.SM};
  }

  &[data-size='${TYPOGRAPHY_SIZES.MEDIUM}'] {
    font-size: ${FONT_SIZES.LG};
  }

  &[data-size='${TYPOGRAPHY_SIZES.LARGE}'] {
    font-size: ${FONT_SIZES.XL};
  }

  &[data-size='${TYPOGRAPHY_SIZES.LARGER}'] {
    font-size: ${FONT_SIZES.XXL};
  }

  &[data-size='${TYPOGRAPHY_SIZES.LARGEST}'] {
    font-size: ${FONT_SIZES.XXXL};
  }

  &[data-weight='${TYPOGRAPHY_WEIGHTS.MEDIUM}'] {
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }

  &[data-weight='${TYPOGRAPHY_WEIGHTS.SEMIBOLD}'] {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  &[data-weight='${TYPOGRAPHY_WEIGHTS.BOLD}'] {
    font-weight: ${FONT_WEIGHTS.BOLD};
  }

  &[data-tone='${TYPOGRAPHY_TONES.SECONDARY}'] {
    --typography-color: ${COLORS.TEXT_SECONDARY};
  }

  &[data-tone='${TYPOGRAPHY_TONES.DISABLED}'] {
    --typography-color: ${COLORS.TEXT_DISABLED};
  }

  &[data-tone='${TYPOGRAPHY_TONES.ACCENT}'] {
    --typography-color: ${COLORS.ACCENT};
    --typography-link-hover: ${COLORS.ACCENT_HOVER};
    --typography-link-active: ${COLORS.ACCENT_ACTIVE};
  }

  &[data-tone='${TYPOGRAPHY_TONES.INHERIT}'] {
    --typography-color: inherit;
    --typography-link-hover: inherit;
    --typography-link-active: inherit;
  }

  &[data-line-height='${TYPOGRAPHY_LINE_HEIGHTS.TIGHT}'] {
    line-height: ${LINE_HEIGHTS.TIGHT};
  }

  &[data-line-height='${TYPOGRAPHY_LINE_HEIGHTS.RELAXED}'] {
    line-height: ${LINE_HEIGHTS.RELAXED};
  }

  &[data-italic='true'] {
    font-style: italic;
  }

  &[data-truncate='true'] {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-link='true'] {
    text-decoration-line: underline;
    text-decoration-thickness: ${TEXT_DECORATIONS.UNDERLINE_WIDTH};
    text-underline-offset: ${TEXT_DECORATIONS.UNDERLINE_OFFSET};
    transition: color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

    &:active {
      color: var(--typography-link-active);
    }

    &:focus-visible {
      border-radius: ${FOCUS_RINGS.RADIUS};
      outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
      outline-offset: ${FOCUS_RINGS.OFFSET};
    }
  }

  @media (hover: hover) {
    &[data-link='true']:hover {
      color: var(--typography-link-hover);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-link='true'] {
      transition: none;
    }
  }
`;
