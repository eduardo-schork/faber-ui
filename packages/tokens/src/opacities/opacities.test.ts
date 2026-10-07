import { describe, expect, it } from 'vitest';

import { OPACITIES } from './opacities';

describe('opacity tokens', () => {
  it('SHOULD provide shared visibility and interaction levels', () => {
    expect(OPACITIES).toEqual({
      HIDDEN: '0%',
      SKELETON: '55%',
      VISIBLE: '100%',
      INTERACTION_SUBTLE_HOVER: '10%',
      INTERACTION_LIGHT: '14%',
      INTERACTION_SUBTLE_ACTIVE: '18%',
      INTERACTION_LIGHT_HOVER: '20%',
      INTERACTION_LIGHT_ACTIVE: '26%',
      DISABLED_BACKGROUND: '55%',
    });
  });
});
