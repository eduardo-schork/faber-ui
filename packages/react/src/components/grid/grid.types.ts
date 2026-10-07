import type { ComponentPropsWithoutRef, ElementType } from 'react';

import type { TResponsiveValue } from '../../internal/create-responsive-styles';
import type { TFlexGap } from '../flex';
import type { TGridAlign } from './grid.constants';

export type TGridProps = ComponentPropsWithoutRef<'div'> & {
  readonly align?: TResponsiveValue<TGridAlign>;
  readonly as?: ElementType;
  /**
   * A number of equal columns, or a `grid-template-columns` value for unequal tracks. Defaults to
   * one column.
   */
  readonly columns?: TResponsiveValue<number | string>;
  readonly gap?: TResponsiveValue<TFlexGap>;
  /**
   * The narrowest a column may get. When set, the grid fits as many columns as the width allows
   * and `columns` is ignored.
   */
  readonly minColumnWidth?: string;
};
