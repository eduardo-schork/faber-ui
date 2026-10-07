import { describe, expect, it } from 'vitest';

import { Z_INDICES } from './z-indices';

describe('z-index tokens', () => {
  it('SHOULD order sticky content below overlays and overlays below toasts', () => {
    expect(Z_INDICES).toEqual({
      BASE: 0,
      STICKY: 100,
      OVERLAY: 1000,
      TOAST: 1100,
    });
  });
});
