import { cleanup, render } from '@testing-library/react';
import { createRef, forwardRef, type ComponentPropsWithoutRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Link } from './link.ui';

const RouterLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<'a'>>(function RouterLink(
  { children, ...nativeProps },
  ref,
) {
  return (
    <a {...nativeProps} ref={ref} data-router="">
      {children}
    </a>
  );
});

describe('Link', () => {
  afterEach(cleanup);

  it('SHOULD render a native anchor with link defaults and forward its ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByRole } = render(
      <Link ref={ref} href="/docs">
        Documentation
      </Link>,
    );
    const link = getByRole('link', { name: 'Documentation' });

    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('/docs');
    expect(link.getAttribute('data-tone')).toBe('accent');
    expect(link.getAttribute('data-weight')).toBe('medium');
    expect(ref.current).toBe(link);
  });

  it('SHOULD apply visual props without forwarding them to the DOM', () => {
    const { getByRole } = render(
      <Link href="/docs" size="smaller" tone="primary" truncate weight="semibold">
        Documentation
      </Link>,
    );
    const link = getByRole('link', { name: 'Documentation' });

    expect(link.getAttribute('data-size')).toBe('smaller');
    expect(link.getAttribute('data-tone')).toBe('primary');
    expect(link.getAttribute('data-truncate')).toBe('true');
    expect(link.hasAttribute('truncate')).toBe(false);
    expect(link.hasAttribute('tone')).toBe(false);
  });

  it('SHOULD let a router component render the anchor WHEN as is provided', () => {
    const { getByRole } = render(
      <Link as={RouterLink} href="/docs" className="consumer">
        Documentation
      </Link>,
    );
    const link = getByRole('link', { name: 'Documentation' });

    expect(link.hasAttribute('data-router')).toBe(true);
    expect(link.getAttribute('href')).toBe('/docs');
    expect(link.classList.contains('consumer')).toBe(true);
  });
});
