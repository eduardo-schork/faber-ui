import { describe, expect, it } from 'vitest';

import { FONT_SIZES } from './font-sizes';

describe('font size tokens', () => {
  it('provides the approved font size scale', () => {
    expect(FONT_SIZES).toEqual({
      XS: '12px',
      SM: '14px',
      MD: '16px',
      LG: '18px',
      XL: '20px',
      XXL: '24px',
      XXXL: '32px',
    });
  });
});
