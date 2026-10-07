import { describe, expect, it } from 'vitest';

import { SPACING_SCALE, SPACINGS } from './spacings';

describe('spacing tokens', () => {
  it('SHOULD follow the 4px base grid', () => {
    expect(SPACING_SCALE).toEqual({
      NONE: '0px',
      XXS: '4px',
      XS: '8px',
      SM: '12px',
      MD: '16px',
      LG: '24px',
      XL: '32px',
      XXL: '48px',
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(SPACINGS)).toEqual(Object.keys(SPACING_SCALE));
    expect(SPACINGS.NONE).toBe('var(--faber-ui-spacing-none, 0px)');
  });
});
