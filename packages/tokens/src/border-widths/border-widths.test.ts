import { describe, expect, it } from 'vitest';

import { BORDER_WIDTH_SCALE, BORDER_WIDTHS } from './border-widths';

describe('border width tokens', () => {
  it('SHOULD provide default and strong widths', () => {
    expect(BORDER_WIDTH_SCALE).toEqual({
      NONE: '0px',
      DEFAULT: '1px',
      STRONG: '2px',
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(BORDER_WIDTHS)).toEqual(Object.keys(BORDER_WIDTH_SCALE));
    expect(BORDER_WIDTHS.NONE).toBe('var(--faber-ui-border-width-none, 0px)');
  });
});
