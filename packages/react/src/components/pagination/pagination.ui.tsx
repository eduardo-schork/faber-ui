import { forwardRef } from 'react';

import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_VARIANTS } from '../button';
import { getPaginationRange, PAGINATION_ELLIPSIS } from './get-pagination-range';
import {
  PaginationButton,
  PaginationEllipsis,
  PaginationList,
  StyledPagination,
} from './pagination.styles';
import type { TPaginationProps } from './pagination.types';

const STEP_BUTTON_PROPS = {
  color: BUTTON_COLORS.NEUTRAL,
  size: BUTTON_SIZES.SMALL,
  variant: BUTTON_VARIANTS.SUBTLE,
} as const;

const CURRENT_BUTTON_PROPS = {
  color: BUTTON_COLORS.PRIMARY,
  size: BUTTON_SIZES.SMALL,
  variant: BUTTON_VARIANTS.FILLED,
} as const;

const getDefaultPageLabel = (page: number) => `Page ${String(page)}`;

function Chevron({ direction }: { readonly direction: 'next' | 'previous' }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 16 16"
      width="16"
    >
      <path d={direction === 'next' ? 'M6 3.5l4.5 4.5L6 12.5' : 'M10 3.5L5.5 8l4.5 4.5'} />
    </svg>
  );
}

export const Pagination = forwardRef<HTMLElement, TPaginationProps>(function Pagination(
  {
    'aria-label': ariaLabel = 'Pagination',
    count,
    getPageLabel = getDefaultPageLabel,
    nextLabel = 'Next page',
    onPageChange,
    page,
    previousLabel = 'Previous page',
    siblingCount = 1,
    ...nativeProps
  },
  ref,
) {
  const range = getPaginationRange(count, page, siblingCount);

  return (
    <StyledPagination {...nativeProps} ref={ref} aria-label={ariaLabel}>
      <PaginationList>
        <li>
          <PaginationButton
            {...STEP_BUTTON_PROPS}
            aria-label={previousLabel}
            disabled={page <= 1}
            onClick={() => {
              onPageChange(page - 1);
            }}
          >
            <Chevron direction="previous" />
          </PaginationButton>
        </li>
        {range.map((item, index) =>
          item === PAGINATION_ELLIPSIS ? (
            <li key={`${PAGINATION_ELLIPSIS}-${String(index)}`} aria-hidden="true">
              <PaginationEllipsis>…</PaginationEllipsis>
            </li>
          ) : (
            <li key={item}>
              <PaginationButton
                {...(item === page ? CURRENT_BUTTON_PROPS : STEP_BUTTON_PROPS)}
                aria-current={item === page ? 'page' : undefined}
                aria-label={getPageLabel(item)}
                onClick={() => {
                  onPageChange(item);
                }}
              >
                {item}
              </PaginationButton>
            </li>
          ),
        )}
        <li>
          <PaginationButton
            {...STEP_BUTTON_PROPS}
            aria-label={nextLabel}
            disabled={page >= count}
            onClick={() => {
              onPageChange(page + 1);
            }}
          >
            <Chevron direction="next" />
          </PaginationButton>
        </li>
      </PaginationList>
    </StyledPagination>
  );
});
