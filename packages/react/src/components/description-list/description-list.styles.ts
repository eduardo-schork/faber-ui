import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';
import { DESCRIPTION_LIST_ORIENTATIONS } from './description-list.constants';

export const StyledDescriptionList = styled.dl.attrs({ className: 'faber-ui-description-list' })`
  display: flex;
  flex-direction: column;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  margin: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-orientation='${DESCRIPTION_LIST_ORIENTATIONS.HORIZONTAL}'] {
    flex-flow: row wrap;
    gap: ${SPACINGS.SM} ${SPACINGS.XL};
  }
`;

export const StyledDescriptionItem = styled(VFlex).attrs({
  className: 'faber-ui-description-item',
})``;

export const StyledDescriptionTerm = styled.dt.attrs({ className: 'faber-ui-description-term' })`
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.XS};
`;

export const StyledDescriptionDetails = styled.dd.attrs({
  className: 'faber-ui-description-details',
})`
  margin: ${SPACINGS.NONE};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;
