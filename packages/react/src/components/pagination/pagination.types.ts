import type { ComponentPropsWithoutRef } from 'react';

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
