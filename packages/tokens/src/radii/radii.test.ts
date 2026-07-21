import { describe, expect, it } from 'vitest';

import { RADII } from './radii';

describe('radius tokens', () => {
  it('provides the approved border radius scale', () => {
    expect(RADII).toEqual({
      NONE: '0px',
      XS: '2px',
      SM: '4px',
      MD: '8px',
      LG: '12px',
      XL: '16px',
      FULL: '9999px',
    });
  });
});
