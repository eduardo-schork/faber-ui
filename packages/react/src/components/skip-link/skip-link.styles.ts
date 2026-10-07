import { BORDER_WIDTHS, COLORS, RADII, SPACINGS, Z_INDICES } from '@faber-ui/tokens';
import styled from 'styled-components';

import { Link } from '../link';

/* Off screen until it receives keyboard focus, then pinned to the top corner of the viewport. */
export const StyledSkipLink = styled(Link).attrs({ className: 'faber-ui-skip-link' })`
  position: fixed;
  z-index: ${Z_INDICES.TOAST};
  inset-block-start: ${SPACINGS.XS};
  inset-inline-start: ${SPACINGS.XS};
  padding: ${SPACINGS.XS} ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  background-color: ${COLORS.SURFACE_PRIMARY};

  &:not(:focus) {
    width: ${BORDER_WIDTHS.DEFAULT};
    height: ${BORDER_WIDTHS.DEFAULT};
    margin: calc(${BORDER_WIDTHS.DEFAULT} * -1);
    padding: ${SPACINGS.NONE};
    overflow: hidden;
    border: ${BORDER_WIDTHS.NONE};
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }
`;
