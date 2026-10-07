import { describe, expect, it } from 'vitest';

import { RELATIVE_SIZES } from './relative-sizes';

describe('relative size tokens', () => {
  it('SHOULD provide a font-relative component size', () => {
    expect(RELATIVE_SIZES).toEqual({
      CURRENT_FONT: '1em',
    });
  });
});
