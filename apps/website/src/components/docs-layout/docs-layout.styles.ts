import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  COLORS,
  Card,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  List,
  NavLink,
  RADII,
  SIZES,
  SPACINGS,
  SideNav,
  Table,
  Title,
} from '@faber-ui/react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';

export const DocsFrame = styled(Grid).attrs({ forwardedAs: 'main' })`
  grid-template-columns: minmax(0, calc(${SIZES.XXL} * 2.5)) minmax(0, 1fr);
  gap: ${SPACINGS.XXL};
  padding-block: ${SPACINGS.XXL} calc(${SPACINGS.XXL} * 2);

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.XL};
    padding-block: ${SPACINGS.LG} ${SPACINGS.XXL};
  }
`;

export const DocsSidebar = styled(SideNav)`
  position: sticky;
  top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  align-self: start;
  gap: ${SPACINGS.XL};
  max-height: calc(100dvh - ${SITE_HEADER_HEIGHT} - ${SPACINGS.XXL});
  overflow-y: auto;

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    display: none;
  }
`;

/* The library NavLink drawn as an entry on a ruled margin instead of a filled pill. */
export const SidebarLink = styled(NavLink).attrs({ forwardedAs: NextLink })`
  padding-block: ${SPACINGS.XXS};
  padding-inline: ${SPACINGS.SM} ${SPACINGS.NONE};
  border-inline-start: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.NONE};

  &[data-depth='1'] {
    padding-inline-start: ${SPACINGS.LG};
  }
`;

export const DocsArticle = styled(Grid).attrs({ forwardedAs: 'article' })`
  min-width: ${SPACINGS.NONE};
`;

export const DocsHeader = styled(Grid).attrs({ forwardedAs: 'header' })`
  gap: ${SPACINGS.MD};
  padding-bottom: ${SPACINGS.XXL};
`;

export const DocsTitle = styled(Title.H1)`
  && {
    font-size: clamp(calc(${FONT_SIZES.XL} * 1.8), 5vw, calc(${FONT_SIZES.XXXL} * 2));
    letter-spacing: -0.045em;
    line-height: 1;
    text-wrap: balance;
  }
`;

export const DocsSection = styled(Grid).attrs({ forwardedAs: 'section' })`
  gap: ${SPACINGS.LG};
  min-width: ${SPACINGS.NONE};
  padding-block: ${SPACINGS.XXL};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const DocsSectionTitle = styled(Title.H2)`
  && {
    font-size: clamp(${FONT_SIZES.XXL}, 2.6vw, ${FONT_SIZES.XXXL});
    letter-spacing: -0.03em;
  }
`;

export const DocsSubsection = styled(Grid)`
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
  margin-top: ${SPACINGS.MD};
`;

export const DocsStack = styled(Grid)`
  align-content: start;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
`;

export const DocsColumns = styled(Grid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/** The library Card a live example renders in. */
export const DemoSurface = styled(Card)`
  display: grid;
  align-content: center;
  gap: ${SPACINGS.MD};
  border-radius: ${RADII.MD};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const DocsList = styled(List)`
  gap: ${SPACINGS.XS};
  max-width: 68ch;
  margin: ${SPACINGS.NONE};
  padding-inline-start: ${SPACINGS.LG};
  color: ${COLORS.TEXT_SECONDARY};

  li::marker {
    color: ${COLORS.ACCENT};
  }
`;

/** A reference table whose last column holds code. */
export const LayerTable = styled(Table)`
  thead th {
    ${captionText}
    border-bottom-color: ${COLORS.BORDER_STRONG};
    color: ${COLORS.TEXT_SECONDARY};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  tbody th {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  td {
    color: ${COLORS.TEXT_SECONDARY};
  }

  td:last-child {
    ${captionText}
    color: ${COLORS.TEXT_PRIMARY};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    thead {
      display: none;
    }

    tr {
      display: grid;
      gap: ${SPACINGS.XXS};
      padding-block: ${SPACINGS.SM};
      border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    }

    th,
    td {
      padding: ${SPACINGS.NONE};
      border-bottom: ${BORDER_WIDTHS.NONE};
    }
  }
`;
