import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  Button,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  Footer,
  HFlex,
  Header,
  LINE_HEIGHTS,
  NavLink as DsNavLink,
  OPACITIES,
  RADII,
  SIZES,
  SPACINGS,
  Text,
} from '@faber-ui/react';
import NextLink from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';

import { captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';
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

/* The page-width container inside supplies the inline padding and the row layout. */
export const SiteHeader = styled(Header).attrs({ sticky: true })`
  padding-inline: ${SPACINGS.NONE};
`;

export const HeaderRow = styled(HFlex)`
  align-items: center;
  gap: ${SPACINGS.XL};
  min-height: ${SITE_HEADER_HEIGHT};

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    flex-wrap: wrap;
    gap: ${SPACINGS.NONE} ${SPACINGS.MD};
    padding-top: ${SPACINGS.XS};
  }
`;

export const Brand = styled(DsNavLink).attrs({ forwardedAs: NextLink })`
  padding: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${FONT_SIZES.LG};
  font-weight: ${FONT_WEIGHTS.BOLD};
  letter-spacing: -0.02em;
  line-height: ${LINE_HEIGHTS.NONE};
`;

export const BrandVersion = styled(Text.Caption)`
  ${captionText}
  align-self: flex-end;
  color: ${COLORS.TEXT_SECONDARY};
`;

export const HeaderNav = styled(HFlex).attrs({ forwardedAs: 'nav' })`
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

/* The library NavLink with the current page marked by a rule under the bar instead of a fill. */
export const NavLink = styled(DsNavLink).attrs({ forwardedAs: NextLink })`
  position: relative;
  flex: none;
  min-height: ${SIZES.LG};
  padding: ${SPACINGS.NONE};
  border-radius: ${RADII.NONE};
  white-space: nowrap;

  &[aria-current='page'] {
    background-color: transparent;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }

  &[aria-current='page']::after {
    position: absolute;
    inset-inline: ${SPACINGS.NONE};
    bottom: ${SPACINGS.NONE};
    height: ${BORDER_WIDTHS.STRONG};
    background: ${COLORS.ACCENT};
    content: '';
  }
`;

export const HeaderActions = styled(HFlex)`
  align-items: center;
  gap: ${SPACINGS.MD};
  margin-inline-start: auto;
`;

export const HeaderExternalLink = styled(DsNavLink)`
  gap: ${SPACINGS.XXS};
  padding: ${SPACINGS.NONE};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    display: none;
  }
`;

export const ThemeButton = styled(Button)`
  text-transform: capitalize;
`;

export const SiteContent = styled(Box)`
  min-height: 70dvh;

  &:focus {
    outline: none;
  }
`;

export const SiteFooter = styled(Footer)`
  padding: ${SPACINGS.NONE};
  border-top-color: ${COLORS.BORDER_STRONG};
`;

export const FooterRow = styled(HFlex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM} ${SPACINGS.XL};
  padding-block: ${SPACINGS.LG};
`;

export const FooterLinks = styled(HFlex).attrs({ forwardedAs: 'nav' })`
  flex-wrap: wrap;
  gap: ${SPACINGS.XS} ${SPACINGS.LG};
`;
