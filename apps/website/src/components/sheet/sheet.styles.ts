import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  CARD_PADDINGS,
  COLORS,
  CONTAINER_SIZES,
  Card,
  FOCUS_RINGS,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  HFlex,
  LINE_HEIGHTS,
  Link,
  RADII,
  SIZES,
  SPACINGS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
  Text,
  Title,
} from '@faber-ui/react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';

export const SITE_HEADER_HEIGHT = SIZES.XL;

export const focusRing = css`
  &:focus-visible {
    border-radius: ${FOCUS_RINGS.RADIUS};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }
`;

/** Small annotation text: figures, labels, and table headers. Numerals align in columns. */
export const captionText = css`
  font-size: ${FONT_SIZES.XS};
  font-variant-numeric: tabular-nums;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  letter-spacing: 0.01em;
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const PageWidth = styled(Box)`
  width: 100%;
  max-width: ${CONTAINER_SIZES.WIDE};
  margin-inline: auto;
  padding-inline: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding-inline: ${SPACINGS.MD};
  }
`;

export const Caption = styled(Text.Caption)`
  ${captionText}
  color: ${COLORS.TEXT_SECONDARY};

  &[data-emphasis='ink'] {
    color: ${COLORS.TEXT_PRIMARY};
  }

  &[data-emphasis='markup'] {
    color: ${COLORS.ACCENT};
  }
`;

/** A full-width section separated from the previous one by a hairline. */
export const Band = styled(Box).attrs({ forwardedAs: 'section' })`
  padding-block: calc(${SPACINGS.XXL} * 1.5);
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding-block: ${SPACINGS.XXL};
  }
`;

/** A narrow labelled rail beside the section content, like the margin of a drawing sheet. */
export const Rail = styled(Grid)`
  grid-template-columns: minmax(0, calc(${SIZES.XXL} * 2.5)) minmax(0, 1fr);
  gap: ${SPACINGS.XXL};

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.LG};
  }
`;

export const RailLabel = styled(Grid)`
  position: sticky;
  top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  align-self: start;
  gap: ${SPACINGS.XXS};

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    position: static;
    display: flex;
    gap: ${SPACINGS.SM};
  }
`;

export const RailContent = styled(Box)`
  min-width: ${SPACINGS.NONE};
`;

export const BandIntro = styled(Grid)`
  gap: ${SPACINGS.MD};
  max-width: 62ch;
  margin-bottom: ${SPACINGS.XXL};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    margin-bottom: ${SPACINGS.XL};
  }
`;

// The doubled ampersand outranks the size attribute selector that Title applies by default.
export const BandTitle = styled(Title.H2)`
  && {
    font-size: clamp(${FONT_SIZES.XXL}, 3.4vw, calc(${FONT_SIZES.XL} * 2));
    letter-spacing: -0.03em;
    line-height: 1.08;
    text-wrap: balance;
  }
`;

export const Lead = styled(Text.Lead)`
  max-width: 60ch;
  margin: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.LG};
  line-height: ${LINE_HEIGHTS.NORMAL};
  text-wrap: pretty;
`;

export const Prose = styled(Text.P)`
  max-width: 68ch;
  margin: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
  line-height: ${LINE_HEIGHTS.RELAXED};
  text-wrap: pretty;

  strong {
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
`;

/** An inline run of text that keeps the size and weight of the text around it. */
export const Run = styled(Text.Span).attrs({
  size: TYPOGRAPHY_SIZES.INHERIT,
  weight: TYPOGRAPHY_WEIGHTS.INHERIT,
})``;

const linkIcon = css`
  svg {
    display: inline-block;
    margin-inline-start: ${SPACINGS.XXS};
    vertical-align: -0.15em;
  }
`;

/** An internal link: the library Link rendered through the Next.js router. */
export const TextLink = styled(Link).attrs({
  forwardedAs: NextLink,
  tone: TYPOGRAPHY_TONES.PRIMARY,
})`
  ${linkIcon}
`;

export const ExternalLink = styled(Link).attrs({ tone: TYPOGRAPHY_TONES.PRIMARY })`
  ${linkIcon}
`;

/** A square library Card with crop marks outside two corners. */
export const Frame = styled(Card).attrs({ padding: CARD_PADDINGS.NONE })`
  position: relative;
  border-color: ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.NONE};

  &::before,
  &::after {
    position: absolute;
    width: ${SPACINGS.XS};
    height: ${SPACINGS.XS};
    border: ${BORDER_WIDTHS.NONE} solid ${COLORS.BORDER_STRONG};
    content: '';
    pointer-events: none;
  }

  &::before {
    top: calc(-1 * ${SPACINGS.SM});
    left: calc(-1 * ${SPACINGS.SM});
    border-right-width: ${BORDER_WIDTHS.DEFAULT};
    border-bottom-width: ${BORDER_WIDTHS.DEFAULT};
  }

  &::after {
    right: calc(-1 * ${SPACINGS.SM});
    bottom: calc(-1 * ${SPACINGS.SM});
    border-top-width: ${BORDER_WIDTHS.DEFAULT};
    border-left-width: ${BORDER_WIDTHS.DEFAULT};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const FrameHead = styled(HFlex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.XS} ${SPACINGS.MD};
  padding: ${SPACINGS.XS} ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;
