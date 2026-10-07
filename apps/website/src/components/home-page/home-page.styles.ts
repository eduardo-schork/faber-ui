import {
  Alert,
  BORDER_WIDTHS,
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SIZES,
  SPACINGS,
  Table,
  Title,
} from '@faber-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

import { focusRing, captionText } from '@/components/sheet/sheet.styles';

export const HeroBand = styled.section`
  padding-block: calc(${SPACINGS.XXL} * 1.5) calc(${SPACINGS.XXL} * 2);

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    padding-block: ${SPACINGS.XL} ${SPACINGS.XXL};
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: calc(${SPACINGS.XXL} * 1.5);

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.XXL};
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  justify-items: start;
  gap: ${SPACINGS.LG};
`;

export const HeroTitle = styled(Title.H1)`
  && {
    font-size: clamp(calc(${FONT_SIZES.XL} * 2), 7.2vw, calc(${FONT_SIZES.XXXL} * 3));
    letter-spacing: -0.05em;
    line-height: 0.96;
  }

  span {
    display: block;
    color: ${COLORS.TEXT_SECONDARY};
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACINGS.SM};
  margin-top: ${SPACINGS.XS};
`;

export const HeroFacts = styled.dl`
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

export const Ledger = styled.ol`
  display: grid;
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  list-style: none;
`;

export const LedgerRow = styled.li`
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

export const LedgerClaim = styled.div`
  display: grid;
  gap: ${SPACINGS.XS};
`;

export const PartsTable = styled(Table)`
  thead th {
    ${captionText}
    border-bottom-color: ${COLORS.BORDER_STRONG};
    color: ${COLORS.TEXT_SECONDARY};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  tbody th {
    font-size: ${FONT_SIZES.MD};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    white-space: nowrap;
  }

  td {
    ${captionText}
    color: ${COLORS.TEXT_SECONDARY};
  }

  td:first-child {
    width: ${SIZES.LG};
  }

  @media (hover: hover) {
    tbody tr:hover td:first-child {
      color: ${COLORS.ACCENT};
    }
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    [data-column='ref'],
    [data-column='family'] {
      display: none;
    }
  }
`;

export const PartLink = styled(Link)`
  color: ${COLORS.TEXT_PRIMARY};
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

export const StartGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: start;
  gap: ${SPACINGS.XXL};

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Steps = styled.ol`
  display: grid;
  gap: ${SPACINGS.XL};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  list-style: none;
`;

export const Step = styled.li`
  display: grid;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
`;

export const StatusNote = styled(Alert)`
  [data-alert-body] {
    display: grid;
    gap: ${SPACINGS.SM};
  }

  ul {
    display: grid;
    gap: ${SPACINGS.XS};
    margin: ${SPACINGS.NONE};
    padding: ${SPACINGS.NONE};
    list-style: none;
  }
`;
