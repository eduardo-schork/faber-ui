import { LINE_HEIGHTS, SPACINGS } from '@faber-ui/tokens';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { describe, expect, it } from 'vitest';

import { GlobalStyles } from './global-styles.ui';

describe('GlobalStyles', () => {
  it('SHOULD emit the opt-in document baseline', () => {
    const styleSheet = new ServerStyleSheet();

    try {
      renderToString(styleSheet.collectStyles(<GlobalStyles />));

      const emittedCSS = styleSheet.getStyleTags();

      expect(emittedCSS).toMatch(/box-sizing:\s*border-box/);
      expect(emittedCSS).toContain(`margin:${SPACINGS.NONE}`);
      expect(emittedCSS).toContain(`line-height:${LINE_HEIGHTS.NORMAL}`);
    } finally {
      styleSheet.seal();
    }
  });
});
