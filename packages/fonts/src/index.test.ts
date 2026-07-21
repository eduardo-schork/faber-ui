import { describe, expect, it } from 'vitest';

import { FONT_FAMILY_NAME } from './index';

describe('font package', () => {
  it('exposes the family name used by its styles', () => {
    expect(FONT_FAMILY_NAME).toBe('Plus Jakarta Sans Variable');
  });
});
