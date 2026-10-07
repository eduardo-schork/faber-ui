import { BORDER_WIDTHS, COLORS, FONT_FAMILIES, SIZES, SPACINGS, Z_INDICES } from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledHeader = styled.header.attrs({ className: 'faber-ui-header' })`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: ${SPACINGS.MD};
  min-height: ${SIZES.XL};
  padding-inline: ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.BACKGROUND_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};

  &[data-sticky='true'] {
    position: sticky;
    z-index: ${Z_INDICES.STICKY};
    inset-block-start: ${SPACINGS.NONE};
  }
`;
