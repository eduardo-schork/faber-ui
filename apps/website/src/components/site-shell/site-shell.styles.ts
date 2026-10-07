import {
  BORDER_WIDTHS,
  Button,
  BREAKPOINTS,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SIZES,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

import { focusRing, captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';
import { createMaterialStylesheet } from '@/site/materials';

export const SiteStyles = createGlobalStyle`
  ${createMaterialStylesheet()}

  html {
    scroll-padding-top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  }

  ::selection {
    background: color-mix(in srgb, ${COLORS.ACCENT} ${OPACITIES.INTERACTION_LIGHT_ACTIVE}, transparent);
  }
`;

export const SkipLink = styled.a`
  position: fixed;
  z-index: ${Z_INDICES.TOAST};
  top: ${SPACINGS.XS};
  left: ${SPACINGS.XS};
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
  border-radius: ${RADII.SM};
  color: ${COLORS.BACKGROUND_PRIMARY};
  background: ${COLORS.TEXT_PRIMARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  text-decoration: none;
`;

export const SiteHeader = styled.header`
  position: sticky;
  z-index: ${Z_INDICES.STICKY};
  top: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  background: ${COLORS.BACKGROUND_PRIMARY};
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACINGS.XL};
  min-height: ${SITE_HEADER_HEIGHT};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex-wrap: wrap;
    gap: ${SPACINGS.NONE} ${SPACINGS.MD};
    padding-top: ${SPACINGS.XS};
  }
`;

export const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${SPACINGS.XS};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${FONT_SIZES.LG};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: -0.02em;
  line-height: ${LINE_HEIGHTS.NONE};
  text-decoration: none;

  ${focusRing}
`;

/** A malachite block with a copper rivet. */
export const BrandMark = styled.span`
  position: relative;
  width: ${SIZES.XS};
  height: ${SIZES.XS};
  border-radius: ${RADII.SM};
  background: ${COLORS.PRIMARY};

  &::after {
    position: absolute;
    right: ${SPACINGS.XXS};
    bottom: ${SPACINGS.XXS};
    width: ${SPACINGS.XS};
    height: ${SPACINGS.XS};
    border-radius: ${RADII.FULL};
    background: ${COLORS.ACCENT};
    content: '';
  }
`;

export const BrandVersion = styled.span`
  ${captionText}
  align-self: flex-end;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex: 1;
  align-items: center;
  gap: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex: none;
    order: 3;
    width: 100%;
    overflow-x: auto;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: ${SIZES.LG};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  text-decoration: none;
  white-space: nowrap;

  &[aria-current='page'] {
    color: ${COLORS.TEXT_PRIMARY};
  }

  &[aria-current='page']::after {
    position: absolute;
    inset-inline: ${SPACINGS.NONE};
    bottom: ${SPACINGS.NONE};
    height: ${BORDER_WIDTHS.STRONG};
    background: ${COLORS.ACCENT};
    content: '';
  }

  @media (hover: hover) {
    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }

  ${focusRing}
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACINGS.MD};
  margin-inline-start: auto;
`;

export const HeaderExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${SPACINGS.XXS};
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  text-decoration: none;

  @media (hover: hover) {
    &:hover {
      color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    display: none;
  }

  ${focusRing}
`;

export const ThemeButton = styled(Button)`
  text-transform: capitalize;
`;

export const SiteContent = styled.div`
  min-height: 70dvh;

  &:focus {
    outline: none;
  }
`;

export const SiteFooter = styled.footer`
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: ${SPACINGS.XL};
  padding-block: ${SPACINGS.XXL};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

export const FooterAbout = styled.div`
  display: grid;
  align-content: start;
  justify-items: start;
  gap: ${SPACINGS.SM};
  max-width: 44ch;
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.SM};

  p {
    margin: ${SPACINGS.NONE};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    grid-column: 1 / -1;
  }
`;

export const FooterColumn = styled.nav`
  display: grid;
  align-content: start;
  justify-items: start;
  gap: ${SPACINGS.XS};
  font-size: ${FONT_SIZES.SM};
`;

export const FooterHeading = styled.span`
  ${captionText}
  margin-bottom: ${SPACINGS.XXS};
  color: ${COLORS.TEXT_SECONDARY};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const FooterColophon = styled.p`
  ${captionText}
  margin: ${SPACINGS.NONE};
  padding-block: ${SPACINGS.MD};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_SECONDARY};
`;
