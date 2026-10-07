import {
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledFooter = styled.footer.attrs({ className: 'faber-ui-footer' })`
  box-sizing: border-box;
  padding: ${SPACINGS.XL} ${SPACINGS.MD};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_SECONDARY};
  background-color: ${COLORS.BACKGROUND_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;
