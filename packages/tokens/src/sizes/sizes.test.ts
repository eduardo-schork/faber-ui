import { describe, expect, it } from 'vitest';

import { SIZES } from './sizes';

describe('size tokens', () => {
  it('provides the approved reusable size scale', () => {
    expect(SIZES).toEqual({
      XXS: '16px',
      XS: '24px',
      SM: '32px',
      MD: '40px',
      LG: '48px',
      XL: '64px',
      XXL: '80px',
    });
  });
});
