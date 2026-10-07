import {
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledTable = styled.table.attrs({ className: 'faber-ui-table' })`
  width: 100%;
  border-collapse: collapse;
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  caption {
    padding-bottom: ${SPACINGS.XS};
    color: ${COLORS.TEXT_SECONDARY};
    text-align: start;
  }

  th,
  td {
    padding: ${SPACINGS.SM} ${SPACINGS.MD} ${SPACINGS.SM} ${SPACINGS.NONE};
    border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    text-align: start;
    vertical-align: baseline;
  }

  th {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  thead th {
    border-bottom-color: ${COLORS.BORDER_STRONG};
    color: ${COLORS.TEXT_SECONDARY};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }

  td {
    color: ${COLORS.TEXT_SECONDARY};
  }
`;
