import { BORDER_WIDTHS, COLORS, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { DIVIDER_ORIENTATIONS } from './divider.constants';

export const StyledDivider = styled.hr.attrs({ className: 'faber-ui-divider' })`
  flex: none;
  box-sizing: border-box;
  width: 100%;
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  background-color: ${COLORS.BORDER_DEFAULT};

  &[data-orientation='${DIVIDER_ORIENTATIONS.VERTICAL}'] {
    align-self: stretch;
    width: ${BORDER_WIDTHS.DEFAULT};
    min-height: ${SIZES.XS};
    height: auto;
  }
`;
