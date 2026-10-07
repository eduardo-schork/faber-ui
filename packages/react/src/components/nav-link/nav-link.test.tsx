import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { NavLink } from './nav-link.ui';

describe('NavLink', () => {
  afterEach(cleanup);

  it('SHOULD render an anchor and forward its ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByRole } = render(
      <NavLink ref={ref} href="/docs">
        Docs
      </NavLink>,
    );
    const link = getByRole('link', { name: 'Docs' });

    expect(link.getAttribute('href')).toBe('/docs');
    expect(link.hasAttribute('aria-current')).toBe(false);
    expect(ref.current).toBe(link);
  });

  it('SHOULD mark the current page without forwarding the custom prop', () => {
    const { getByRole } = render(
      <NavLink current href="/docs">
        Docs
      </NavLink>,
    );
    const link = getByRole('link', { name: 'Docs' });

    expect(link.getAttribute('aria-current')).toBe('page');
    expect(link.hasAttribute('current')).toBe(false);
  });
});
