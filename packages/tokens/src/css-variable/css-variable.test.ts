import { describe, expect, it } from 'vitest';

import { cssVariable } from './css-variable';

describe('cssVariable', () => {
  it('SHOULD create a CSS variable reference', () => {
    expect(cssVariable('--faber-ui-color-text-primary')).toBe('var(--faber-ui-color-text-primary)');
  });

  it('SHOULD create a CSS variable reference WHEN a fallback is provided', () => {
    expect(cssVariable('--faber-ui-color-text-primary', '#171717')).toBe(
      'var(--faber-ui-color-text-primary, #171717)',
    );
  });
});
