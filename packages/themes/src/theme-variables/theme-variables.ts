import type { TTheme, TThemeTokenName } from '../theme';

export const THEME_VARIABLE_NAMES = {
  BACKGROUND_PRIMARY: '--faber-ui-color-background-primary',
  SURFACE_PRIMARY: '--faber-ui-color-surface-primary',
  TEXT_PRIMARY: '--faber-ui-color-text-primary',
  TEXT_SECONDARY: '--faber-ui-color-text-secondary',
  TEXT_DISABLED: '--faber-ui-color-text-disabled',
  BORDER_DEFAULT: '--faber-ui-color-border-default',
  BORDER_STRONG: '--faber-ui-color-border-strong',
  DISABLED_BACKGROUND: '--faber-ui-color-disabled-background',
  FOCUS_RING: '--faber-ui-color-focus-ring',
  ERROR: '--faber-ui-color-error',
  PRIMARY: '--faber-ui-color-primary',
  PRIMARY_HOVER: '--faber-ui-color-primary-hover',
  PRIMARY_ACTIVE: '--faber-ui-color-primary-active',
  ON_PRIMARY: '--faber-ui-color-on-primary',
  ACCENT: '--faber-ui-color-accent',
  ACCENT_HOVER: '--faber-ui-color-accent-hover',
  ACCENT_ACTIVE: '--faber-ui-color-accent-active',
  ON_ACCENT: '--faber-ui-color-on-accent',
} as const satisfies Record<TThemeTokenName, `--${string}`>;

export type TThemeVariableName = (typeof THEME_VARIABLE_NAMES)[TThemeTokenName];
export type TThemeCSSVariables = Readonly<Record<TThemeVariableName, string>>;

export function createThemeCSSVariables(theme: TTheme): TThemeCSSVariables {
  return Object.fromEntries(
    (Object.keys(THEME_VARIABLE_NAMES) as TThemeTokenName[]).map((tokenName) => [
      THEME_VARIABLE_NAMES[tokenName],
      theme[tokenName],
    ]),
  ) as TThemeCSSVariables;
}
