import { SPACINGS, type TSpacingTokenName } from '@faber-ui/tokens';
import styled, { css } from 'styled-components';

import {
  createResponsiveStyles,
  type TResponsiveValue,
} from '../../internal/create-responsive-styles';

type TStyledBoxProps = {
  readonly $padding?: TResponsiveValue<TSpacingTokenName>;
};

export const StyledBox = styled.div.attrs({ className: 'faber-ui-box' })<TStyledBoxProps>`
  box-sizing: border-box;
  min-width: ${SPACINGS.NONE};
  ${({ $padding }) =>
    createResponsiveStyles(
      $padding,
      (value) => css`
        padding: ${SPACINGS[value]};
      `,
    )}
`;
