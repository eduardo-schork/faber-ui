import { BORDER_WIDTHS, COLORS, LIST_MARKERS, List, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

export const GuideList = styled(List).attrs({ marker: LIST_MARKERS.NONE })`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: ${SPACINGS.XXS} ${SPACINGS.LG};
    padding-block: ${SPACINGS.SM};
    border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  }
`;
