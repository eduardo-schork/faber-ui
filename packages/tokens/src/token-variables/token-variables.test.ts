import { describe, expect, it } from 'vitest';

import { createTokenVariables } from './create-token-variables';
import { createTokenCSSVariables, TOKEN_VARIABLE_SCALES } from './token-css-variables';

describe('token variables', () => {
  it('SHOULD reference a lower-case custom property and fall back to the raw value', () => {
    expect(createTokenVariables('gap', { SM: '4px', WEIGHT: 600 })).toEqual({
      SM: 'var(--faber-ui-gap-sm, 4px)',
      WEIGHT: 'var(--faber-ui-gap-weight, 600)',
    });
  });

  it('SHOULD declare one custom property for every value of every exposed scale', () => {
    const declarations = createTokenCSSVariables();
    const valueCount = Object.values(TOKEN_VARIABLE_SCALES).reduce(
      (count, scale) => count + Object.keys(scale).length,
      0,
    );

    expect(Object.keys(declarations)).toHaveLength(valueCount);
    expect(declarations['--faber-ui-spacing-md']).toBe('16px');
    expect(declarations['--faber-ui-radius-full']).toBe('9999px');
    expect(declarations['--faber-ui-font-weight-semibold']).toBe('600');
    expect(declarations['--faber-ui-line-height-normal']).toBe('1.5');
  });
});
