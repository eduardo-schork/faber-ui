import { describe, expect, it } from 'vitest';

import { RADIUS_SCALE, RADII } from './radii';

describe('radius tokens', () => {
  it('SHOULD provide the approved border radius scale', () => {
    expect(RADIUS_SCALE).toEqual({
      NONE: '0px',
      XS: '2px',
      SM: '4px',
      MD: '8px',
      LG: '12px',
      XL: '16px',
      FULL: '9999px',
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(RADII)).toEqual(Object.keys(RADIUS_SCALE));
    expect(RADII.NONE).toBe('var(--faber-ui-radius-none, 0px)');
  });
});
