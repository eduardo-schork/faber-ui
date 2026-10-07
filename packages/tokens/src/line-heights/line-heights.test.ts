import { describe, expect, it } from 'vitest';

import { LINE_HEIGHT_SCALE, LINE_HEIGHTS } from './line-heights';

describe('line height tokens', () => {
  it('SHOULD provide the approved unitless line height scale', () => {
    expect(LINE_HEIGHT_SCALE).toEqual({
      ZERO: 0,
      NONE: 1,
      TIGHT: 1.2,
      NORMAL: 1.5,
      RELAXED: 1.75,
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(LINE_HEIGHTS)).toEqual(Object.keys(LINE_HEIGHT_SCALE));
    expect(LINE_HEIGHTS.ZERO).toBe('var(--faber-ui-line-height-zero, 0)');
  });
});
