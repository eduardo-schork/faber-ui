import { describe, expect, it } from 'vitest';

import { scopePlaygroundCss } from './scope-playground-css';

describe('scopePlaygroundCss', () => {
  it('SHOULD nest every rule under the preview class', () => {
    expect(scopePlaygroundCss('.faber-ui-button-icon { opacity: 0.5; }')).toBe(
      '.playground-preview {\n.faber-ui-button-icon { opacity: 0.5; }\n}',
    );
  });

  it('SHOULD point :root at the preview itself', () => {
    expect(scopePlaygroundCss(':root { --faber-ui-radius-md: 0px; }')).toBe(
      '.playground-preview {\n& { --faber-ui-radius-md: 0px; }\n}',
    );
  });

  it('SHOULD leave selectors that merely contain the word root untouched', () => {
    expect(scopePlaygroundCss('.rootless { color: red; }')).toContain('.rootless { color: red; }');
  });
});
