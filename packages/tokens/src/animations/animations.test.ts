import { describe, expect, it } from 'vitest';

import { ANIMATIONS } from './animations';

describe('animation tokens', () => {
  it('provides the initial motion vocabulary', () => {
    expect(ANIMATIONS).toEqual({
      DURATION_FAST: '150ms',
      DURATION_SPIN: '700ms',
      EASING_LINEAR: 'linear',
      EASING_STANDARD: 'ease',
      ROTATION_FULL: '360deg',
    });
  });
});
