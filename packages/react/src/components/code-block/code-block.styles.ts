import {
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FLEX_ALIGNS, FLEX_JUSTIFIES, HFlex, VFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';

export const CodeBlockRoot = styled(VFlex).attrs({ className: 'faber-ui-code-block' })`
  box-sizing: border-box;
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const CodeBlockHeader = styled(HFlex).attrs({
  className: 'faber-ui-code-block-header',
  align: FLEX_ALIGNS.CENTER,
  gap: 'SM',
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})`
  flex: none;
  padding: ${SPACINGS.XXS} ${SPACINGS.XS} ${SPACINGS.XXS} ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const CodeBlockLabel = styled(Text.Span).attrs({
  className: 'faber-ui-code-block-label',
  size: TYPOGRAPHY_SIZES.SMALLEST,
  tone: TYPOGRAPHY_TONES.SECONDARY,
  truncate: true,
})``;

/* The family is set explicitly because browsers default a pre element to monospace. */
export const StyledCodeBlockPre = styled.pre.attrs({ className: 'faber-ui-code-block-pre' })`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.MD};
  overflow-x: auto;
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.RELAXED};
  tab-size: 2;

  code {
    font: inherit;
  }

  &:focus-visible {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: calc(${FOCUS_RINGS.WIDTH} * -1);
  }
`;
