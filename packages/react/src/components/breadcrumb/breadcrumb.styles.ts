import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FLEX_ALIGNS, FLEX_WRAPS, HFlex } from '../flex';

export const StyledBreadcrumb = styled.nav.attrs({ className: 'faber-ui-breadcrumb' })`
  color: ${COLORS.TEXT_SECONDARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const BreadcrumbList = styled(HFlex).attrs({
  className: 'faber-ui-breadcrumb-list',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'ol',
  wrap: FLEX_WRAPS.WRAP,
})`
  gap: ${SPACINGS.XXS} ${SPACINGS.XS};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  list-style: none;
`;

export const StyledBreadcrumbItem = styled.li.attrs({ className: 'faber-ui-breadcrumb-item' })`
  display: inline-flex;
  align-items: center;
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};

  & + &::before {
    color: ${COLORS.TEXT_DISABLED};
    content: '/';
  }

  [aria-current='page'] {
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
`;
