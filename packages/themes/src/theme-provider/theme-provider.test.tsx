import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { THEME_VARIABLE_NAMES } from '../theme-variables';
import { ThemeProvider } from './theme-provider.ui';

describe('ThemeProvider', () => {
  afterEach(cleanup);

  it('SHOULD apply the light theme by default', () => {
    const { container } = render(
      <ThemeProvider>
        <span>Content</span>
      </ThemeProvider>,
    );
    const scope = container.firstElementChild as HTMLElement;

    expect(scope.getAttribute('data-theme')).toBe('light');
    expect(scope.style.getPropertyValue(THEME_VARIABLE_NAMES.BACKGROUND_PRIMARY)).toBe(
      'hsl(200 14% 96%)',
    );
  });

  it('SHOULD apply the dark theme WHEN requested', () => {
    const { container } = render(
      <ThemeProvider mode="dark">
        <span>Content</span>
      </ThemeProvider>,
    );
    const scope = container.firstElementChild as HTMLElement;

    expect(scope.getAttribute('data-theme')).toBe('dark');
    expect(scope.style.getPropertyValue(THEME_VARIABLE_NAMES.BACKGROUND_PRIMARY)).toBe(
      'hsl(200 16% 8%)',
    );
  });
});
