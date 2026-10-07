import { describe, expect, it } from 'vitest';

import { CONTAINER_SIZES } from './container-sizes';

describe('container size tokens', () => {
  it('SHOULD provide the responsive page width scale', () => {
    expect(CONTAINER_SIZES).toEqual({
      SMALL: '720px',
      MEDIUM: '960px',
      LARGE: '1140px',
      WIDE: '1320px',
    });
  });
});
