import { describe, expect, it } from 'vitest';

import { COLORS } from './colors';
import { PALETTE } from './palette';

describe('brand color tokens', () => {
  it('stores explicit HSL values in the primitive palette', () => {
    expect(PALETTE.GREEN_400).toBe('hsl(95 46% 26%)');
    expect(PALETTE.PURPLE_400).toBe('hsl(297 37% 34%)');
  });

  it('maps semantic tokens to overridable CSS variables', () => {
    expect(COLORS.PRIMARY).toBe('var(--faber-ui-color-primary, hsl(95 46% 26%))');
    expect(COLORS.ACCENT).toBe('var(--faber-ui-color-accent, hsl(297 37% 34%))');
  });

  it('exposes three lighter and two darker levels for each brand family', () => {
    const scaleTokenPattern = /^(?:PRIMARY|ACCENT)_(?:LIGHTEN|DARKEN)_/;
    const scaleTokens = Object.keys(COLORS).filter((name) => scaleTokenPattern.test(name));

    expect(scaleTokens.filter((name) => name.startsWith('PRIMARY_'))).toHaveLength(5);
    expect(scaleTokens.filter((name) => name.startsWith('ACCENT_'))).toHaveLength(5);
  });
});

describe('neutral color tokens', () => {
  it('provides eleven visually neutral levels', () => {
    const neutralTokens = Object.keys(PALETTE).filter((name) => name.startsWith('NEUTRAL_'));

    expect(neutralTokens).toHaveLength(11);
    expect(PALETTE.NEUTRAL_50).toBe('hsl(95 20% 98%)');
    expect(PALETTE.NEUTRAL_950).toBe('hsl(95 14% 7%)');
  });

  it('uses neutral fallbacks for primary text and background', () => {
    expect(COLORS.TEXT_PRIMARY).toBe('var(--faber-ui-color-text-primary, hsl(95 14% 7%))');
    expect(COLORS.BACKGROUND_PRIMARY).toBe(
      'var(--faber-ui-color-background-primary, hsl(95 20% 98%))',
    );
    expect(COLORS.SURFACE_PRIMARY).toBe('var(--faber-ui-color-surface-primary, #ffffff)');
  });
});
