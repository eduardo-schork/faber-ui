import type { CSSProperties, PropsWithChildren } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { DARK_THEME, LIGHT_THEME, THEME_MODES } from '../theme';
import type { TTheme, TThemeMode } from '../theme';
import { createThemeCSSVariables } from '../theme-variables';

export type TThemeProviderProps = PropsWithChildren<{
  readonly mode?: Exclude<TThemeMode, typeof THEME_MODES.SYSTEM>;
  readonly theme?: TTheme;
}>;

export function ThemeProvider({ children, mode = THEME_MODES.LIGHT, theme }: TThemeProviderProps) {
  const resolvedTheme = theme ?? (mode === THEME_MODES.DARK ? DARK_THEME : LIGHT_THEME);
  const style = {
    ...createThemeCSSVariables(resolvedTheme),
    display: 'contents',
  } as CSSProperties;

  return (
    <StyledComponentsThemeProvider theme={resolvedTheme}>
      <div data-theme={mode} style={style}>
        {children}
      </div>
    </StyledComponentsThemeProvider>
  );
}
