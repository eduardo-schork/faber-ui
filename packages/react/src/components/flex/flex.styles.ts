import { BORDER_WIDTHS, SPACINGS } from '@faber-ui/tokens';
import styled, { css } from 'styled-components';

import { createResponsiveStyles } from '../../internal/create-responsive-styles';
import { resolveSpacing } from '../../internal/resolve-spacing';

import type {
  TFlexAlign,
  TFlexDirection,
  TFlexGap,
  TFlexJustify,
  TFlexResponsiveValue,
  TFlexWrap,
} from './flex.types';

type TStyledFlexProps = {
  readonly $align?: TFlexResponsiveValue<TFlexAlign>;
  readonly $direction?: TFlexResponsiveValue<TFlexDirection>;
  readonly $gap?: TFlexResponsiveValue<TFlexGap>;
  readonly $inline: boolean;
  readonly $justify?: TFlexResponsiveValue<TFlexJustify>;
  readonly $wrap?: TFlexResponsiveValue<TFlexWrap>;
};

export const StyledFlex = styled.div.attrs({ className: 'faber-ui-flex' })<TStyledFlexProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  min-width: ${SPACINGS.NONE};
  ${({ $direction }) =>
    createResponsiveStyles(
      $direction,
      (value) => css`
        flex-direction: ${value};
      `,
    )}
  ${({ $align }) =>
    createResponsiveStyles(
      $align,
      (value) => css`
        align-items: ${value};
      `,
    )}
  ${({ $justify }) =>
    createResponsiveStyles(
      $justify,
      (value) => css`
        justify-content: ${value};
      `,
    )}
  ${({ $wrap }) =>
    createResponsiveStyles(
      $wrap,
      (value) => css`
        flex-wrap: ${value};
      `,
    )}
  ${({ $gap }) =>
    createResponsiveStyles(
      $gap,
      (value) => css`
        gap: ${resolveSpacing(value)};
      `,
    )}
  &[data-outline-color] {
    outline: ${BORDER_WIDTHS.DEFAULT} dashed var(--faber-ui-flex-outline-color);
  }
`;
