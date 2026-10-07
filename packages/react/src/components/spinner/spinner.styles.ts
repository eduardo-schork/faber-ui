import { ANIMATIONS, BORDER_WIDTHS, RADII, RELATIVE_SIZES, SIZES } from '@faber-ui/tokens';
import styled, { keyframes } from 'styled-components';

import { SPINNER_SIZES } from './spinner.constants';

const rotate = keyframes`
  to {
    transform: rotate(${ANIMATIONS.ROTATION_FULL});
  }
`;

export const StyledSpinner = styled.span.attrs({ className: 'faber-ui-spinner' })`
  display: inline-block;
  box-sizing: border-box;
  width: ${SIZES.XS};
  height: ${SIZES.XS};
  border: ${BORDER_WIDTHS.STRONG} solid currentcolor;
  border-right-color: transparent;
  border-radius: ${RADII.FULL};
  vertical-align: middle;
  animation: ${rotate} ${ANIMATIONS.DURATION_SPIN} ${ANIMATIONS.EASING_LINEAR} infinite;

  &[data-size='${SPINNER_SIZES.CURRENT}'] {
    width: ${RELATIVE_SIZES.CURRENT_FONT};
    height: ${RELATIVE_SIZES.CURRENT_FONT};
  }

  &[data-size='${SPINNER_SIZES.SMALL}'] {
    width: ${SIZES.XXS};
    height: ${SIZES.XXS};
  }

  &[data-size='${SPINNER_SIZES.LARGE}'] {
    width: ${SIZES.SM};
    height: ${SIZES.SM};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
