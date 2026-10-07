import { describe, expect, it } from 'vitest';

import { FOCUS_RINGS } from './focus-rings';

describe('focus ring tokens', () => {
  it('SHOULD provide the shared accessible focus treatment from the radius and border scales', () => {
    expect(FOCUS_RINGS).toEqual({
      OFFSET: '2px',
      RADIUS: 'var(--faber-ui-radius-xs, 2px)',
      WIDTH: 'var(--faber-ui-border-width-strong, 2px)',
    });
  });
});
