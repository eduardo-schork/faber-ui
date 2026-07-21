import { describe, expect, it } from 'vitest';

import { SPACINGS } from './spacings';

describe('spacing tokens', () => {
  it('follows the 4px base grid', () => {
    expect(SPACINGS).toEqual({
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
});
