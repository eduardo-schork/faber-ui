import { BORDER_WIDTHS, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledVisuallyHidden = styled.span.attrs({ className: 'faber-ui-visually-hidden' })`
  position: absolute;
  width: ${BORDER_WIDTHS.DEFAULT};
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: calc(${BORDER_WIDTHS.DEFAULT} * -1);
  padding: ${SPACINGS.NONE};
  overflow: hidden;
  border: ${BORDER_WIDTHS.NONE};
  clip: rect(0 0 0 0);
  white-space: nowrap;

  &[data-focusable='true']:focus,
  &[data-focusable='true']:focus-within {
    position: static;
    width: auto;
    height: auto;
    margin: ${SPACINGS.NONE};
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`;
