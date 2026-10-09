import { ANIMATIONS, OPACITIES, SPACINGS } from '@faber-ui/tokens';
import { css, keyframes } from 'styled-components';

const floatingOffset = `translate(var(--floating-enter-x, ${SPACINGS.NONE}), var(--floating-enter-y, ${SPACINGS.NONE}))`;

const floatIn = keyframes`
  from {
    opacity: ${OPACITIES.HIDDEN};
    transform: ${floatingOffset};
  }
`;

const floatOut = keyframes`
  to {
    opacity: ${OPACITIES.HIDDEN};
    transform: ${floatingOffset};
  }
`;

const riseIn = keyframes`
  from {
    opacity: ${OPACITIES.HIDDEN};
    transform: translateY(${SPACINGS.XXS});
  }
`;

/**
 * Motion for content that Radix floats next to a trigger. It fades in while moving a short way
 * out of the trigger, read from `data-side`, and leaves the same way when Radix keeps it mounted
 * for the exit.
 */
export const floatingMotionStyles = css`
  animation: ${floatIn} ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_ENTER};

  &[data-side='bottom'] {
    --floating-enter-y: calc(${SPACINGS.XXS} * -1);
  }

  &[data-side='top'] {
    --floating-enter-y: ${SPACINGS.XXS};
  }

  &[data-side='right'] {
    --floating-enter-x: calc(${SPACINGS.XXS} * -1);
  }

  &[data-side='left'] {
    --floating-enter-x: ${SPACINGS.XXS};
  }

  &[data-state='closed'] {
    animation: ${floatOut} ${ANIMATIONS.DURATION_INSTANT} ${ANIMATIONS.EASING_EXIT};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &[data-state='closed'] {
      animation: none;
    }
  }
`;

/** Motion for something that appears in place, such as a message or a notification. */
export const riseInStyles = css`
  animation: ${riseIn} ${ANIMATIONS.DURATION_MODERATE} ${ANIMATIONS.EASING_ENTER};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
