import { BORDER_WIDTHS, COLORS, FONT_FAMILIES, RADII, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { CARD_PADDINGS } from './card.constants';

export const StyledCard = styled.div.attrs({ className: 'faber-ui-card' })`
  box-sizing: border-box;
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.LG};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};

  &[data-padding='${CARD_PADDINGS.NONE}'] {
    padding: ${SPACINGS.NONE};
  }

  &[data-padding='${CARD_PADDINGS.SMALL}'] {
    padding: ${SPACINGS.MD};
  }

  &[data-padding='${CARD_PADDINGS.LARGE}'] {
    padding: ${SPACINGS.XL};
  }
`;
