import { describe, expect, it } from 'vitest';

import { FONT_FAMILIES } from './font-families';

describe('font family tokens', () => {
  it('SHOULD provide an overridable base family with resilient fallbacks', () => {
    expect(FONT_FAMILIES).toEqual({
      BASE: "var(--faber-ui-font-family-base, 'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', Arial, sans-serif)",
    });
  });
});
