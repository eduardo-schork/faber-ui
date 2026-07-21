import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

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
  it('contains every light theme variable', () => {
    expectThemeValues(LIGHT_THEME);
  });

  it('contains every dark theme variable', () => {
    expectThemeValues(DARK_THEME);
  });

  it('supports explicit and system color modes', () => {
    expect(styles).toContain("[data-theme='light']");
    expect(styles).toContain("[data-theme='dark']");
    expect(styles).toContain("[data-theme='system']");
    expect(styles).toContain('@media (prefers-color-scheme: dark)');
  });
});
