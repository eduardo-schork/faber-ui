import { ANIMATIONS, COLORS, OPACITIES, RADII, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  from {
    opacity: ${OPACITIES.SKELETON};
  }

  to {
    opacity: ${OPACITIES.VISIBLE};
  }
`;

export const StyledSkeleton = styled.div.attrs({ className: 'faber-ui-skeleton' })`
  width: 100%;
  min-width: ${SPACINGS.NONE};
  min-height: ${SIZES.XXS};
  border-radius: ${RADII.MD};
  background-color: ${COLORS.DISABLED_BACKGROUND};

  &[data-circle='true'] {
    width: ${SIZES.LG};
    height: ${SIZES.LG};
    border-radius: ${RADII.FULL};
  }

  &[data-animated='true'] {
    animation: ${pulse} ${ANIMATIONS.DURATION_SLOW} ${ANIMATIONS.EASING_STANDARD} infinite alternate;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
