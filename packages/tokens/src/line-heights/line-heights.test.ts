import { describe, expect, it } from 'vitest';

import { LINE_HEIGHTS } from './line-heights';

describe('line height tokens', () => {
  it('provides the approved unitless line height scale', () => {
    expect(LINE_HEIGHTS).toEqual({
      ZERO: 0,
      NONE: 1,
      TIGHT: 1.2,
      NORMAL: 1.5,
      RELAXED: 1.75,
    });
  });
});
