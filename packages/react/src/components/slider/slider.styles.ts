import { COLORS, FOCUS_RINGS, OPACITIES, RADII, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledSlider = styled.input.attrs({ className: 'faber-ui-slider' })`
  display: block;
  width: 100%;
  height: ${SIZES.XS};
  margin: ${SPACINGS.NONE};
  accent-color: ${COLORS.PRIMARY};
  cursor: pointer;

  &[aria-invalid='true'] {
    accent-color: ${COLORS.ERROR};
  }

  &:focus-visible {
    border-radius: ${RADII.FULL};
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &:disabled {
    opacity: ${OPACITIES.DISABLED_BACKGROUND};
    cursor: not-allowed;
  }
`;
