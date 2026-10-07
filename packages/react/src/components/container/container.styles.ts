import { BREAKPOINTS, CONTAINER_SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';

export const StyledContainer = styled(VFlex).attrs({ className: 'faber-ui-container' })`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding-block: ${SPACINGS.NONE};
  padding-inline: ${SPACINGS.MD};

  &[data-center='true'] {
    margin-inline: auto;
  }

  &[data-custom-size] {
    max-width: var(--faber-ui-container-max-width);
  }

  @media (min-width: ${BREAKPOINTS.TABLET}) {
    &:not([data-custom-size]) {
      min-width: ${CONTAINER_SIZES.SMALL};
      max-width: ${CONTAINER_SIZES.SMALL};
      padding-inline: ${SPACINGS.NONE};
    }
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    &:not([data-custom-size]) {
      min-width: ${CONTAINER_SIZES.MEDIUM};
      max-width: ${CONTAINER_SIZES.MEDIUM};
    }
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    &:not([data-custom-size]) {
      min-width: ${CONTAINER_SIZES.LARGE};
      max-width: ${CONTAINER_SIZES.LARGE};
    }
  }

  @media (min-width: ${BREAKPOINTS.DESKTOP_WIDE}) {
    &:not([data-custom-size]) {
      min-width: ${CONTAINER_SIZES.WIDE};
      max-width: ${CONTAINER_SIZES.WIDE};
    }
  }
`;
