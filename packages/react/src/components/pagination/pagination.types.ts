import type { ComponentPropsWithoutRef } from 'react';

import type { TButtonProps } from '../button';

export type TPaginationProps = Omit<ComponentPropsWithoutRef<'nav'>, 'children' | 'onChange'> & {
  /** The total number of pages. */
  readonly count: number;
  readonly getPageLabel?: (page: number) => string;
  readonly nextLabel?: string;
  readonly onPageChange: (page: number) => void;
  /** The current page, starting at 1. */
  readonly page: number;
  readonly previousLabel?: string;
  /** How many pages to show on each side of the current page. */
  readonly siblingCount?: number;
};

/** One page or step control. `current` marks the page being shown. */
export type TPaginationButtonProps = Omit<TButtonProps, 'color' | 'size' | 'variant'> & {
  readonly current?: boolean;
};
