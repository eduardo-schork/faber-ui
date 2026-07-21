import { describe, expect, it } from 'vitest';

import { FOCUS_RINGS } from './focus-rings';

describe('focus ring tokens', () => {
  it('provides the shared accessible focus treatment', () => {
    expect(FOCUS_RINGS).toEqual({
      OFFSET: '2px',
      RADIUS: '2px',
      WIDTH: '2px',
    });
  });
});
