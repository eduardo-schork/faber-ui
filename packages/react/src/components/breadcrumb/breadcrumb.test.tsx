import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Breadcrumb, BreadcrumbItem } from './breadcrumb.ui';

describe('Breadcrumb', () => {
  afterEach(cleanup);

  it('SHOULD render a named navigation landmark with an ordered list and forward its ref', () => {
    const ref = createRef<HTMLElement>();
    const { getByRole, getAllByRole } = render(
      <Breadcrumb ref={ref}>
        <BreadcrumbItem>
          <a href="/">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/settings">Settings</a>
        </BreadcrumbItem>
        <BreadcrumbItem current>Billing</BreadcrumbItem>
      </Breadcrumb>,
    );
    const navigation = getByRole('navigation', { name: 'Breadcrumb' });

    expect(navigation.querySelector('ol')).not.toBeNull();
    expect(getAllByRole('listitem')).toHaveLength(3);
    expect(ref.current).toBe(navigation);
  });

  it('SHOULD announce the current page WHEN an item is current', () => {
    const { getByText } = render(
      <Breadcrumb aria-label="You are here">
        <BreadcrumbItem current>Billing</BreadcrumbItem>
      </Breadcrumb>,
    );

    expect(getByText('Billing').getAttribute('aria-current')).toBe('page');
  });
});
