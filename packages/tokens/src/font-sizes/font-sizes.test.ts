import { describe, expect, it } from 'vitest';

import { FONT_SIZE_SCALE, FONT_SIZES } from './font-sizes';

describe('font size tokens', () => {
  it('SHOULD provide the approved font size scale', () => {
    expect(FONT_SIZE_SCALE).toEqual({
      XS: '12px',
      SM: '14px',
      MD: '16px',
      LG: '18px',
      XL: '20px',
      XXL: '24px',
      XXXL: '32px',
      DISPLAY_SM: '40px',
      DISPLAY_MD: '64px',
      DISPLAY_LG: '96px',
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(FONT_SIZES)).toEqual(Object.keys(FONT_SIZE_SCALE));
    expect(FONT_SIZES.XS).toBe('var(--faber-ui-font-size-xs, 12px)');
  });
});
