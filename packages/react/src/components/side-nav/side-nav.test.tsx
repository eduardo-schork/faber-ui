import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { NavLink } from '../nav-link';
import { SideNav, SideNavGroup } from './side-nav.ui';

describe('SideNav', () => {
  afterEach(cleanup);

  it('SHOULD render a navigation landmark with labelled groups and forward its ref', () => {
    const ref = createRef<HTMLElement>();
    const { getByRole } = render(
      <SideNav ref={ref} aria-label="Documentation">
        <SideNavGroup label="Guides">
          <NavLink current href="/docs">
            Get started
          </NavLink>
        </SideNavGroup>
      </SideNav>,
    );
    const group = getByRole('group', { name: 'Guides' });

    expect(getByRole('navigation', { name: 'Documentation' })).toBe(ref.current);
    expect(group.contains(getByRole('link', { name: 'Get started' }))).toBe(true);
    expect(group.hasAttribute('label')).toBe(false);
  });
});
