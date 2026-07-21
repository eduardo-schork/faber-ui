import { describe, expect, it } from 'vitest';

import { FONT_WEIGHTS } from './font-weights';

describe('font weight tokens', () => {
  it('provides the approved font weight scale', () => {
    expect(FONT_WEIGHTS).toEqual({
      REGULAR: 400,
      MEDIUM: 500,
      SEMIBOLD: 600,
      BOLD: 700,
    });
  });
});
