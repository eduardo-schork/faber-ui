import { THEME_MODES, type TThemeMode } from '@faber-ui/react';
import { useSyncExternalStore } from 'react';

import {
  DEFAULT_MATERIAL_ID,
  isMaterialId,
  type TColorScheme,
  type TMaterialId,
} from '@/site/materials';
import { PREFERENCE_ATTRIBUTES, STORAGE_KEYS } from '@/site/site.constants';

const PREFERENCES_CHANGE_EVENT = 'faber-ui-website-preferences-change';
const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)';

const isThemeMode = (value: string | null): value is TThemeMode =>
  value === THEME_MODES.LIGHT || value === THEME_MODES.DARK || value === THEME_MODES.SYSTEM;

const subscribeToPreferences = (onChange: () => void) => {
  window.addEventListener(PREFERENCES_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener(PREFERENCES_CHANGE_EVENT, onChange);
  };
};

const subscribeToSystemScheme = (onChange: () => void) => {
  const query = window.matchMedia(DARK_SCHEME_QUERY);

  query.addEventListener('change', onChange);

  return () => {
    query.removeEventListener('change', onChange);
  };
};

const readTheme = (): TThemeMode => {
  const value = document.documentElement.getAttribute(PREFERENCE_ATTRIBUTES.THEME);

  return isThemeMode(value) ? value : THEME_MODES.SYSTEM;
};

const readMaterial = (): TMaterialId => {
  const value = document.documentElement.getAttribute(PREFERENCE_ATTRIBUTES.MATERIAL);

  return isMaterialId(value) ? value : DEFAULT_MATERIAL_ID;
};

const readSystemPrefersDark = () => window.matchMedia(DARK_SCHEME_QUERY).matches;

const getServerTheme = (): TThemeMode => THEME_MODES.SYSTEM;
const getServerMaterial = (): TMaterialId => DEFAULT_MATERIAL_ID;
const getServerSystemPrefersDark = () => false;

const writePreference = (attribute: string, storageKey: string, value: string) => {
  document.documentElement.setAttribute(attribute, value);

  try {
    window.localStorage.setItem(storageKey, value);
  } catch {
    // Storage can be unavailable; the preference still applies to this page view.
  }

  window.dispatchEvent(new Event(PREFERENCES_CHANGE_EVENT));
};

const setTheme = (theme: TThemeMode) => {
  writePreference(PREFERENCE_ATTRIBUTES.THEME, STORAGE_KEYS.THEME, theme);
};

const setMaterial = (materialId: TMaterialId) => {
  writePreference(PREFERENCE_ATTRIBUTES.MATERIAL, STORAGE_KEYS.MATERIAL, materialId);
};

/**
 * Reads the theme and material stored on the document element. The attributes are written before
 * first paint by the inline script in the root layout, so CSS never waits for React.
 */
export function useSitePreferences() {
  const theme = useSyncExternalStore(subscribeToPreferences, readTheme, getServerTheme);
  const materialId = useSyncExternalStore(subscribeToPreferences, readMaterial, getServerMaterial);
  const systemPrefersDark = useSyncExternalStore(
    subscribeToSystemScheme,
    readSystemPrefersDark,
    getServerSystemPrefersDark,
  );
  const scheme: TColorScheme =
    theme === THEME_MODES.SYSTEM ? (systemPrefersDark ? 'dark' : 'light') : theme;

  return { materialId, scheme, setMaterial, setTheme, theme };
}
