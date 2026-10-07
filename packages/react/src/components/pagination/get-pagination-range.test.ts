import { describe, expect, it } from 'vitest';

import { getPaginationRange } from './get-pagination-range';

describe('getPaginationRange', () => {
  it('SHOULD list every page WHEN nothing needs to be skipped', () => {
    expect(getPaginationRange(5, 3, 1)).toEqual([1, 2, 3, 4, 5]);
  });

  it('SHOULD collapse distant pages into an ellipsis on both sides', () => {
    expect(getPaginationRange(20, 10, 1)).toEqual([1, 'ellipsis', 9, 10, 11, 'ellipsis', 20]);
  });

  it('SHOULD show a page instead of an ellipsis WHEN only one page would be hidden', () => {
    expect(getPaginationRange(10, 4, 1)).toEqual([1, 2, 3, 4, 5, 'ellipsis', 10]);
    expect(getPaginationRange(10, 7, 1)).toEqual([1, 'ellipsis', 6, 7, 8, 9, 10]);
  });

  it('SHOULD clamp an out-of-range page and return nothing for an empty set', () => {
    expect(getPaginationRange(3, 99, 1)).toEqual([1, 2, 3]);
    expect(getPaginationRange(0, 1, 1)).toEqual([]);
  });
});
