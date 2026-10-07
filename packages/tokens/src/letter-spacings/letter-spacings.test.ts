import { describe, expect, it } from 'vitest';

import { LETTER_SPACING_SCALE, LETTER_SPACINGS } from './letter-spacings';

describe('LETTER_SPACINGS', () => {
  it('SHOULD expose the tracking scale as raw values', () => {
    expect(LETTER_SPACING_SCALE).toEqual({ TIGHT: '-0.02em', NORMAL: '0em', WIDE: '0.08em' });
  });

  it('SHOULD reference a CSS variable that falls back to the raw value', () => {
    expect(LETTER_SPACINGS.WIDE).toBe('var(--faber-ui-letter-spacing-wide, 0.08em)');
  });
});
