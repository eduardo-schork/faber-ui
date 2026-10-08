import { describe, expect, it } from 'vitest';

import { COLORS } from './colors';
import { PALETTE } from './palette';

describe('brand color tokens', () => {
  it('SHOULD store explicit HSL values in the primitive palette', () => {
    expect(PALETTE.AMETHYST_400).toBe('hsl(270 50% 38%)');
    expect(PALETTE.OBSIDIAN_400).toBe('hsl(240 12% 20%)');
  });

  it('SHOULD map semantic tokens to overridable CSS variables', () => {
    expect(COLORS.PRIMARY).toBe('var(--faber-ui-color-primary, hsl(270 50% 38%))');
    expect(COLORS.ACCENT).toBe('var(--faber-ui-color-accent, hsl(240 12% 20%))');
    expect(COLORS.ERROR).toBe('var(--faber-ui-color-error, hsl(4 75% 42%))');
  });

  it('SHOULD expose three lighter and two darker levels for each brand family', () => {
    const scaleTokenPattern = /^(?:PRIMARY|ACCENT)_(?:LIGHTEN|DARKEN)_/;
    const scaleTokens = Object.keys(COLORS).filter((name) => scaleTokenPattern.test(name));

    expect(scaleTokens.filter((name) => name.startsWith('PRIMARY_'))).toHaveLength(5);
    expect(scaleTokens.filter((name) => name.startsWith('ACCENT_'))).toHaveLength(5);
  });
});

describe('neutral color tokens', () => {
  it('SHOULD provide eleven visually neutral levels', () => {
    const neutralTokens = Object.keys(PALETTE).filter((name) => name.startsWith('NEUTRAL_'));

    expect(neutralTokens).toHaveLength(11);
    expect(PALETTE.NEUTRAL_50).toBe('hsl(200 14% 96%)');
    expect(PALETTE.NEUTRAL_950).toBe('hsl(200 16% 8%)');
  });

  it('SHOULD use neutral fallbacks for primary text and background', () => {
    expect(COLORS.TEXT_PRIMARY).toBe('var(--faber-ui-color-text-primary, hsl(200 16% 8%))');
    expect(COLORS.BACKGROUND_PRIMARY).toBe(
      'var(--faber-ui-color-background-primary, hsl(200 14% 96%))',
    );
    expect(COLORS.SURFACE_PRIMARY).toBe('var(--faber-ui-color-surface-primary, #ffffff)');
  });
});
