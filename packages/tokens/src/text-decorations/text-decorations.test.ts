import { describe, expect, it } from 'vitest';

import { TEXT_DECORATIONS } from './text-decorations';

describe('text decoration tokens', () => {
  it('provides the shared underline treatment', () => {
    expect(TEXT_DECORATIONS).toEqual({
      UNDERLINE_OFFSET: '0.18em',
      UNDERLINE_WIDTH: '1px',
    });
  });
});
