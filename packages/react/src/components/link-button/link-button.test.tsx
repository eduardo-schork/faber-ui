import { cleanup, render } from '@testing-library/react';
import { createRef, forwardRef, type ComponentPropsWithoutRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { BUTTON_COLORS, BUTTON_VARIANTS } from '../button';
import { LinkButton } from './link-button.ui';

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

describe('LinkButton', () => {
  afterEach(cleanup);

  it('SHOULD render a native link with the Button defaults and forward its ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByRole } = render(
      <LinkButton ref={ref} href="/docs">
        Get started
      </LinkButton>,
    );
    const link = getByRole('link', { name: 'Get started' });

    expect(link.tagName).toBe('A');
    expect(link.getAttribute('href')).toBe('/docs');
    expect(link.hasAttribute('type')).toBe(false);
    expect(link.getAttribute('data-color')).toBe('primary');
    expect(link.getAttribute('data-size')).toBe('medium');
    expect(link.getAttribute('data-variant')).toBe('filled');
    expect(ref.current).toBe(link);
  });

  it('SHOULD share the Button color, variant, and icon contracts', () => {
    const { getByRole } = render(
      <LinkButton
        href="/docs"
        color={BUTTON_COLORS.NEUTRAL}
        variant={BUTTON_VARIANTS.OUTLINE}
        fullWidth
        endIcon={<span>end</span>}
      >
        Browse
      </LinkButton>,
    );
    const link = getByRole('link', { name: 'Browse' });

    expect(link.getAttribute('data-color')).toBe('neutral');
    expect(link.getAttribute('data-variant')).toBe('outline');
    expect(link.getAttribute('data-full-width')).toBe('true');
    expect(link.querySelector('[data-button-icon="end"]')?.getAttribute('aria-hidden')).toBe(
      'true',
    );
  });

  it('SHOULD let a router component render the anchor WHEN as is provided', () => {
    const { getByRole } = render(
      <LinkButton as={RouterLink} href="/docs">
        Get started
      </LinkButton>,
    );
    const link = getByRole('link', { name: 'Get started' });

    expect(link.hasAttribute('data-router')).toBe(true);
    expect(link.getAttribute('data-variant')).toBe('filled');
  });
});
