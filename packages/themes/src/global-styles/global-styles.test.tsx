import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { GlobalStyles } from './global-styles.ui';

describe('GlobalStyles', () => {
  it('emits the opt-in document baseline', () => {
    const styleSheet = new ServerStyleSheet();

    try {
      renderToString(styleSheet.collectStyles(<GlobalStyles />));

      const emittedCSS = styleSheet.getStyleTags();

      expect(emittedCSS).toMatch(/box-sizing:\s*border-box/);
      expect(emittedCSS).toMatch(/margin:\s*0px/);
      expect(emittedCSS).toMatch(/line-height:\s*1\.5/);
    } finally {
      styleSheet.seal();
    }
  });
});
