import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Card,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADII,
  SIZES,
  SPACINGS,
  Title,
} from '@faber-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

import { focusRing, captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';

export const DocsFrame = styled.main`
  display: grid;
  grid-template-columns: minmax(0, calc(${SIZES.XXL} * 2.5)) minmax(0, 1fr);
  gap: ${SPACINGS.XXL};
  padding-block: ${SPACINGS.XXL} calc(${SPACINGS.XXL} * 2);

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.XL};
    padding-block: ${SPACINGS.LG} ${SPACINGS.XXL};
  }
`;

export const DocsSidebar = styled.nav`
  position: sticky;
  top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  display: grid;
  align-self: start;
  gap: ${SPACINGS.XL};
  max-height: calc(100dvh - ${SITE_HEADER_HEIGHT} - ${SPACINGS.XXL});
  overflow-y: auto;

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    position: static;
    max-height: none;

    [data-group='on-this-page'] {
      display: none;
    }
  }
`;

export const SidebarGroup = styled.div`
  display: grid;
  gap: ${SPACINGS.XXS};

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${SPACINGS.XXS} ${SPACINGS.MD};
  }
`;

export const SidebarHeading = styled.span`
  ${captionText}
  margin-bottom: ${SPACINGS.XXS};
  color: ${COLORS.TEXT_SECONDARY};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: 100%;
  }
`;

export const SidebarLink = styled(Link)`
  padding-block: ${SPACINGS.XXS};
  padding-inline-start: ${SPACINGS.SM};
  border-inline-start: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.SM};
  text-decoration: none;

  &[data-depth='1'] {
    padding-inline-start: ${SPACINGS.LG};
  }

  &[aria-current='page'] {
    border-inline-start-color: ${COLORS.ACCENT};
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  @media (hover: hover) {
    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    padding-inline-start: ${SPACINGS.NONE};
    border-inline-start: ${BORDER_WIDTHS.NONE};

    &[aria-current='page'] {
      text-decoration: underline;
      text-decoration-color: ${COLORS.ACCENT};
      text-underline-offset: 0.3em;
    }
  }

  ${focusRing}
`;

export const DocsArticle = styled.article`
  display: grid;
  min-width: ${SPACINGS.NONE};
`;

export const DocsHeader = styled.header`
  display: grid;
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

export const DocsSection = styled.section`
  display: grid;
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

export const DocsSubsection = styled.div`
  display: grid;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
  margin-top: ${SPACINGS.MD};
`;

export const DocsStack = styled.div`
  display: grid;
  align-content: start;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
`;

export const DocsColumns = styled.div`
  display: grid;
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

export const DocsList = styled.ul`
  display: grid;
  gap: ${SPACINGS.XS};
  max-width: 68ch;
  margin: ${SPACINGS.NONE};
  padding-inline-start: ${SPACINGS.LG};
  color: ${COLORS.TEXT_SECONDARY};

  li::marker {
    color: ${COLORS.ACCENT};
  }
`;
