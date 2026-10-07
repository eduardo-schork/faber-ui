import { FONT_FAMILIES, FONT_WEIGHTS, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { Button } from '../button';
import { FLEX_ALIGNS, FLEX_WRAPS, HFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';

export const PaginationRoot = styled.nav.attrs({ className: 'faber-ui-pagination' })`
  font-family: ${FONT_FAMILIES.BASE};
`;

export const PaginationList = styled(HFlex).attrs({
  className: 'faber-ui-pagination-list',
  align: FLEX_ALIGNS.CENTER,
  forwardedAs: 'ul',
  gap: 'XXS',
  wrap: FLEX_WRAPS.WRAP,
})`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  list-style: none;
`;

export const PaginationEllipsis = styled(Text.Span).attrs({
  className: 'faber-ui-pagination-ellipsis',
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
})`
  display: inline-block;
  min-width: ${SIZES.SM};
  text-align: center;
`;

/* The doubled selector outranks the size rules of Button, which match on a data attribute. */
export const StyledPaginationButton = styled(Button).attrs({
  className: 'faber-ui-pagination-button',
})`
  && {
    min-width: ${SIZES.SM};
    padding-inline: ${SPACINGS.XS};
    font-variant-numeric: tabular-nums;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }
`;
