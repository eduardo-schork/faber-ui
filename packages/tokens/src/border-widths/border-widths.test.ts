import { describe, expect, it } from 'vitest';

import { BORDER_WIDTHS } from './border-widths';

describe('border width tokens', () => {
  it('provides default and strong widths', () => {
    expect(BORDER_WIDTHS).toEqual({
      DEFAULT: '1px',
      STRONG: '2px',
    });
  });
});
