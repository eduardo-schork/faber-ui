import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { THEME_VARIABLE_NAMES } from '../theme-variables';
import { ThemeProvider } from './theme-provider.ui';

describe('ThemeProvider', () => {
  afterEach(cleanup);

  it('applies the light theme by default', () => {
    const { container } = render(
      <ThemeProvider>
        <span>Content</span>
      </ThemeProvider>,
    );
    const scope = container.firstElementChild as HTMLElement;

    expect(scope.getAttribute('data-theme')).toBe('light');
    expect(scope.style.getPropertyValue(THEME_VARIABLE_NAMES.BACKGROUND_PRIMARY)).toBe(
      'hsl(95 20% 98%)',
    );
  });

  it('applies the dark theme when requested', () => {
    const { container } = render(
      <ThemeProvider mode="dark">
        <span>Content</span>
      </ThemeProvider>,
    );
    const scope = container.firstElementChild as HTMLElement;

    expect(scope.getAttribute('data-theme')).toBe('dark');
    expect(scope.style.getPropertyValue(THEME_VARIABLE_NAMES.BACKGROUND_PRIMARY)).toBe(
      'hsl(95 78% 7%)',
    );
  });
});
