import { describe, expect, it } from 'vitest';

import { BREAKPOINTS } from './breakpoints';

describe('breakpoint tokens', () => {
  it('SHOULD provide the approved mobile-first layout thresholds', () => {
    expect(BREAKPOINTS).toEqual({
      MOBILE: '0px',
      MOBILE_LARGE: '640px',
      TABLET: '768px',
      DESKTOP: '1024px',
      DESKTOP_LARGE: '1280px',
      DESKTOP_WIDE: '1536px',
    });
  });
});
