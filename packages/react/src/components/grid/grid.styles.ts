import { SPACINGS } from '@faber-ui/tokens';
import styled, { css } from 'styled-components';

import {
  createResponsiveStyles,
  type TResponsiveValue,
} from '../../internal/create-responsive-styles';
import { resolveSpacing } from '../../internal/resolve-spacing';
import type { TFlexGap } from '../flex';
import type { TGridAlign } from './grid.constants';

type TStyledGridProps = {
  readonly $align?: TResponsiveValue<TGridAlign>;
  readonly $columns?: TResponsiveValue<number | string>;
  readonly $gap?: TResponsiveValue<TFlexGap>;
};

const resolveColumns = (columns: number | string) =>
  typeof columns === 'number' ? `repeat(${String(columns)}, minmax(0, 1fr))` : columns;

export const StyledGrid = styled.div.attrs({ className: 'faber-ui-grid' })<TStyledGridProps>`
  display: grid;
  box-sizing: border-box;
  min-width: ${SPACINGS.NONE};
  ${({ $columns }) =>
    createResponsiveStyles(
      $columns,
      (value) => css`
        grid-template-columns: ${resolveColumns(value)};
      `,
    )}
  ${({ $align }) =>
    createResponsiveStyles(
      $align,
      (value) => css`
        align-items: ${value};
      `,
    )}
  ${({ $gap }) =>
    createResponsiveStyles(
      $gap,
      (value) => css`
        gap: ${resolveSpacing(value)};
      `,
    )}

  &[data-auto-fit] {
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(100%, var(--faber-ui-grid-min-column-width)), 1fr)
    );
  }
`;
