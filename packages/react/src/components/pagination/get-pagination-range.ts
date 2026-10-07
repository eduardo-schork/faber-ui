export const PAGINATION_ELLIPSIS = 'ellipsis';

export type TPaginationRangeItem = number | typeof PAGINATION_ELLIPSIS;

const createRange = (start: number, end: number) =>
  Array.from({ length: Math.max(end - start + 1, 0) }, (_, index) => start + index);

/**
 * Lists the page numbers to show: the first and last page, the current page with its siblings,
 * and an ellipsis wherever more than one page is skipped.
 */
export function getPaginationRange(
  count: number,
  page: number,
  siblingCount: number,
): TPaginationRangeItem[] {
  const total = Math.max(Math.trunc(count), 0);

  if (total === 0) {
    return [];
  }

  const current = Math.min(Math.max(Math.trunc(page), 1), total);
  const siblings = Math.max(Math.trunc(siblingCount), 0);
  const start = Math.max(current - siblings, 1);
  const end = Math.min(current + siblings, total);
  const middle = createRange(start, end);
  const leading: TPaginationRangeItem[] =
    start <= 1 ? [] : start === 2 ? [1] : start === 3 ? [1, 2] : [1, PAGINATION_ELLIPSIS];
  const trailing: TPaginationRangeItem[] =
    end >= total
      ? []
      : end === total - 1
        ? [total]
        : end === total - 2
          ? [total - 1, total]
          : [PAGINATION_ELLIPSIS, total];

  return [...leading, ...middle, ...trailing];
}
