import { BORDER_WIDTHS, COLORS, RADII, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

export const StyledProgress = styled.progress.attrs({ className: 'faber-ui-progress' })`
  display: block;
  width: 100%;
  height: ${SPACINGS.XS};
  overflow: hidden;
  border: ${BORDER_WIDTHS.NONE};
  border-radius: ${RADII.FULL};
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.DISABLED_BACKGROUND};
  accent-color: ${COLORS.PRIMARY};
  appearance: none;

  &::-webkit-progress-bar {
    background-color: ${COLORS.DISABLED_BACKGROUND};
  }

  &::-webkit-progress-value {
    border-radius: ${RADII.FULL};
    background-color: ${COLORS.PRIMARY};
  }

  &::-moz-progress-bar {
    border-radius: ${RADII.FULL};
    background-color: ${COLORS.PRIMARY};
  }

  &:indeterminate {
    appearance: auto;
  }
`;
