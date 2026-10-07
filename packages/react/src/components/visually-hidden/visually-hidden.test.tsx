import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { VisuallyHidden } from './visually-hidden.ui';

describe('VisuallyHidden', () => {
  afterEach(cleanup);

  it('SHOULD preserve accessible content and forward its ref', () => {
    const ref = createRef<HTMLSpanElement>();
    const { getByText } = render(<VisuallyHidden ref={ref}>Loading</VisuallyHidden>);
    const content = getByText('Loading');

    expect(content.tagName).toBe('SPAN');
    expect(content.getAttribute('aria-hidden')).toBeNull();
    expect(ref.current).toBe(content);
  });

  it('SHOULD mark content that becomes visible on focus', () => {
    const { getByText } = render(
      <VisuallyHidden focusable>
        <a href="#content">Skip to content</a>
      </VisuallyHidden>,
    );

    expect(getByText('Skip to content').parentElement?.getAttribute('data-focusable')).toBe('true');
  });
});
