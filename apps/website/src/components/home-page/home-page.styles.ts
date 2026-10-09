import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  COLORS,
  DescriptionDetails,
  DescriptionList,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  HFlex,
  LINE_HEIGHTS,
  LIST_MARKERS,
  List,
  ListItem,
  SIZES,
  SPACINGS,
  TYPOGRAPHY_SIZES,
  Title,
} from '@faber-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

import { focusRing, captionText } from '@/components/sheet/sheet.styles';

export const HeroBand = styled(Box).attrs({ forwardedAs: 'section' })`
  padding-block: calc(${SPACINGS.XXL} * 1.5) calc(${SPACINGS.XXL} * 2);

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding-block: ${SPACINGS.XL} ${SPACINGS.XXL};
  }
`;

export const HeroGrid = styled(Grid)`
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: calc(${SPACINGS.XXL} * 1.5);

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.XXL};
  }
`;

export const HeroCopy = styled(Grid)`
  justify-items: start;
  gap: ${SPACINGS.LG};
`;

export const HeroTitle = styled(Title.H1).attrs({ size: TYPOGRAPHY_SIZES.DISPLAY_LARGE })`
  span {
    display: block;
    color: ${COLORS.TEXT_SECONDARY};
  }
`;

export const HeroActions = styled(HFlex)`
  flex-wrap: wrap;
  gap: ${SPACINGS.SM};
  margin-top: ${SPACINGS.XS};
`;

export const HeroFacts = styled(DescriptionList)`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: start;
  gap: ${SPACINGS.XS} ${SPACINGS.XL};
  width: 100%;
  margin: ${SPACINGS.MD} ${SPACINGS.NONE} ${SPACINGS.NONE};
  padding-top: ${SPACINGS.LG};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};

  > div {
    display: grid;
    gap: ${SPACINGS.XXS};
  }

  dt {
    ${captionText}
    order: 2;
    color: ${COLORS.TEXT_SECONDARY};
  }

  dd {
    margin: ${SPACINGS.NONE};
    font-size: ${FONT_SIZES.XXL};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    letter-spacing: -0.03em;
    line-height: ${LINE_HEIGHTS.NONE};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${SPACINGS.LG};
  }
`;

export const Ledger = styled(List).attrs({ ordered: true, marker: LIST_MARKERS.NONE })`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const LedgerRow = styled(ListItem)`
  display: grid;
  grid-template-columns: ${SIZES.LG} minmax(0, 1fr) minmax(0, 1.15fr);
  align-items: start;
  gap: ${SPACINGS.LG} ${SPACINGS.XL};
  padding-block: ${SPACINGS.XL};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: ${SIZES.SM} minmax(0, 1fr);

    > :last-child {
      grid-column: 1 / -1;
    }
  }
`;

export const LedgerClaim = styled(Grid)`
  gap: ${SPACINGS.XS};
`;

export const FamilyIndex = styled(DescriptionList)`
  display: grid;
  margin: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};

  > div {
    display: grid;
    grid-template-columns: calc(${SIZES.XXL} * 2) minmax(0, 1fr);
    align-items: baseline;
    gap: ${SPACINGS.XS} ${SPACINGS.XL};
    padding-block: ${SPACINGS.MD};
    border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  }

  dt {
    ${captionText}
    color: ${COLORS.TEXT_SECONDARY};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    > div {
      grid-template-columns: minmax(0, 1fr);
    }
  }
`;

export const FamilyParts = styled(DescriptionDetails)`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACINGS.XS} ${SPACINGS.LG};
  margin: ${SPACINGS.NONE};
`;

export const PartLink = styled(Link)`
  color: ${COLORS.TEXT_PRIMARY};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  text-decoration: none;

  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      text-decoration-color: ${COLORS.ACCENT};
      text-underline-offset: 0.2em;
    }
  }

  ${focusRing}
`;
