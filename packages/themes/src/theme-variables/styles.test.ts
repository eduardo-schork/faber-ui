import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { createTokenCSSVariables } from '@faber-ui/tokens';
import { describe, expect, it } from 'vitest';

import { DARK_THEME, LIGHT_THEME } from '../theme';
import type { TTheme, TThemeTokenName } from '../theme';
import { THEME_VARIABLE_NAMES } from './theme-variables';

const styles = readFileSync(resolve(process.cwd(), 'src/theme-variables/styles.css'), 'utf8');

function expectThemeValues(theme: TTheme) {
  for (const tokenName of Object.keys(THEME_VARIABLE_NAMES) as TThemeTokenName[]) {
    expect(styles).toContain(`${THEME_VARIABLE_NAMES[tokenName]}: ${theme[tokenName]};`);
  }
}

describe('standalone theme styles', () => {
  it('SHOULD contain every light theme variable', () => {
    expectThemeValues(LIGHT_THEME);
  });

  it('SHOULD contain every dark theme variable', () => {
    expectThemeValues(DARK_THEME);
  });

  it('SHOULD declare every dimensional and typographic token variable', () => {
    for (const [name, value] of Object.entries(createTokenCSSVariables())) {
      expect(styles).toContain(`${name}: ${value};`);
    }
  });

  it('SHOULD support explicit and system color modes', () => {
    expect(styles).toContain("[data-theme='light']");
    expect(styles).toContain("[data-theme='dark']");
    expect(styles).toContain("[data-theme='system']");
    expect(styles).toContain('@media (prefers-color-scheme: dark)');
  });
});
