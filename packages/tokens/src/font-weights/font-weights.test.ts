import { describe, expect, it } from 'vitest';

import { FONT_WEIGHT_SCALE, FONT_WEIGHTS } from './font-weights';

describe('font weight tokens', () => {
  it('SHOULD provide the approved font weight scale', () => {
    expect(FONT_WEIGHT_SCALE).toEqual({
      REGULAR: 400,
      MEDIUM: 500,
      SEMIBOLD: 600,
      BOLD: 700,
    });
  });

  it('SHOULD expose every value as an overridable CSS variable with the raw value as fallback', () => {
    expect(Object.keys(FONT_WEIGHTS)).toEqual(Object.keys(FONT_WEIGHT_SCALE));
    expect(FONT_WEIGHTS.REGULAR).toBe('var(--faber-ui-font-weight-regular, 400)');
  });
});
