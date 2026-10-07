import type { THEME_MODES } from './theme.constants';

export type TThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES];

export type TTheme = {
  readonly BACKGROUND_PRIMARY: string;
  readonly SURFACE_PRIMARY: string;
  readonly TEXT_PRIMARY: string;
  readonly TEXT_SECONDARY: string;
  readonly TEXT_DISABLED: string;
  readonly BORDER_DEFAULT: string;
  readonly BORDER_STRONG: string;
  readonly DISABLED_BACKGROUND: string;
  readonly FOCUS_RING: string;
  readonly ERROR: string;
  readonly OVERLAY: string;
  readonly PRIMARY: string;
  readonly PRIMARY_HOVER: string;
  readonly PRIMARY_ACTIVE: string;
  readonly ON_PRIMARY: string;
  readonly ACCENT: string;
  readonly ACCENT_HOVER: string;
  readonly ACCENT_ACTIVE: string;
  readonly ON_ACCENT: string;
};

export type TThemeTokenName = keyof TTheme;
