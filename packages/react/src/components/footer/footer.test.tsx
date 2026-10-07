import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Footer } from './footer.ui';

describe('Footer', () => {
  afterEach(cleanup);

  it('SHOULD render the content information landmark and forward its ref', () => {
    const ref = createRef<HTMLElement>();
    const { getByRole } = render(
      <Footer ref={ref} className="consumer">
        MIT licensed
      </Footer>,
    );
    const footer = getByRole('contentinfo');

    expect(footer.tagName).toBe('FOOTER');
    expect(footer.classList.contains('consumer')).toBe(true);
    expect(footer.classList.contains('faber-ui-footer')).toBe(true);
    expect(ref.current).toBe(footer);
  });
});
