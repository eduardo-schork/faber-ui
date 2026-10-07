import { SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { BUTTON_SIZES } from '../button/button.constants';
import { StyledButton } from '../button/button.styles';

export const StyledIconButton = styled(StyledButton).attrs({ className: 'faber-ui-icon-button' })`
  width: ${SIZES.MD};
  min-width: ${SIZES.MD};
  padding: ${SPACINGS.NONE};

  &[data-size='${BUTTON_SIZES.SMALL}'] {
    width: ${SIZES.SM};
    min-width: ${SIZES.SM};
    padding: ${SPACINGS.NONE};
  }

  &[data-size='${BUTTON_SIZES.LARGE}'] {
    width: ${SIZES.LG};
    min-width: ${SIZES.LG};
    padding: ${SPACINGS.NONE};
  }
`;
