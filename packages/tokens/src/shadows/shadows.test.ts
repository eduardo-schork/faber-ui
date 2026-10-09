import { describe, expect, it } from 'vitest';

import { COLORS } from '../colors';
import { SHADOW_SCALE, SHADOWS } from './shadows';

describe('shadow tokens', () => {
  it('SHOULD provide three elevation levels and none', () => {
    expect(Object.keys(SHADOW_SCALE)).toEqual(['NONE', 'SM', 'MD', 'LG']);
  });

  it('SHOULD draw every level in the theme shadow color', () => {
    for (const name of ['SM', 'MD', 'LG'] as const) {
      expect(SHADOW_SCALE[name]).toContain(COLORS.SHADOW);
    }
  });

  it('SHOULD resolve through a custom property that falls back to the scale', () => {
    expect(SHADOWS.SM).toBe(`var(--faber-ui-shadow-sm, ${SHADOW_SCALE.SM})`);
    expect(SHADOWS.NONE).toBe('var(--faber-ui-shadow-none, none)');
  });
});
