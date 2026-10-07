import {
  GlobalStyles as ThemeGlobalStyles,
  THEME_MODES as THEME_PACKAGE_MODES,
  ThemeProvider as PackageThemeProvider,
} from '@faber-ui/themes';
import { SPACINGS as TOKEN_PACKAGE_SPACINGS } from '@faber-ui/tokens';
import { describe, expect, it } from 'vitest';

import { GlobalStyles, SPACINGS, THEME_MODES, ThemeProvider } from './index';

describe('theme facade', () => {
  it('SHOULD expose the theme runtime through the React package', () => {
    expect(GlobalStyles).toBe(ThemeGlobalStyles);
    expect(ThemeProvider).toBe(PackageThemeProvider);
    expect(THEME_MODES).toBe(THEME_PACKAGE_MODES);
    expect(SPACINGS).toBe(TOKEN_PACKAGE_SPACINGS);
  });
});
