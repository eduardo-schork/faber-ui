import { describe, expect, it } from 'vitest';

import { SIZE_SCALE, SIZES } from './sizes';

describe('size tokens', () => {
  it('SHOULD provide the approved reusable size scale', () => {
    expect(SIZE_SCALE).toEqual({
      XXS: '16px',
      XS: '24px',
      SM: '32px',
      MD: '40px',
      LG: '48px',
      XL: '64px',
      XXL: '80px',
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(SIZES)).toEqual(Object.keys(SIZE_SCALE));
    expect(SIZES.XXS).toBe('var(--faber-ui-size-xxs, 16px)');
  });
});
