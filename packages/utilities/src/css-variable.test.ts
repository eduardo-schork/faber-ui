import { describe, expect, it } from 'vitest';

import { cssVariable } from './css-variable';

describe('cssVariable', () => {
  it('creates a CSS variable reference', () => {
    expect(cssVariable('--faber-ui-color-text-primary')).toBe('var(--faber-ui-color-text-primary)');
  });

  it('creates a CSS variable reference with fallback', () => {
    expect(cssVariable('--faber-ui-color-text-primary', '#171717')).toBe(
      'var(--faber-ui-color-text-primary, #171717)',
    );
  });
});
