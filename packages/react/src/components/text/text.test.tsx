import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Text } from './text.ui';

describe('Text', () => {
  afterEach(cleanup);

  it('renders every member with its semantic element', () => {
    const { container } = render(
      <div>
        <Text.P>Paragraph</Text.P>
        <Text.Span>Span</Text.Span>
        <Text.A href="/docs">Anchor</Text.A>
        <Text.Label htmlFor="field">Label</Text.Label>
        <Text.Strong>Strong</Text.Strong>
        <Text.Em>Emphasis</Text.Em>
        <Text.Small>Small</Text.Small>
      </div>,
    );

    expect(container.querySelector('p')?.textContent).toBe('Paragraph');
    expect(container.querySelector('span')?.textContent).toBe('Span');
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/docs');
    expect(container.querySelector('label')?.getAttribute('for')).toBe('field');
    expect(container.querySelector('strong')?.textContent).toBe('Strong');
    expect(container.querySelector('em')?.textContent).toBe('Emphasis');
    expect(container.querySelector('small')?.textContent).toBe('Small');
  });

  it('applies defaults and visual overrides through data attributes', () => {
    const { getByText } = render(
      <Text.P size="large" tone="accent" truncate weight="bold">
        Custom text
      </Text.P>,
    );
    const text = getByText('Custom text');

    expect(text.getAttribute('data-size')).toBe('large');
    expect(text.getAttribute('data-tone')).toBe('accent');
    expect(text.getAttribute('data-truncate')).toBe('true');
    expect(text.getAttribute('data-weight')).toBe('bold');
  });

  it('forwards native props without forwarding custom props', () => {
    const { getByRole } = render(
      <Text.A href="/docs" target="_blank" rel="noreferrer" truncate>
        Documentation
      </Text.A>,
    );
    const link = getByRole('link', { name: 'Documentation' });

    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noreferrer');
    expect(link.hasAttribute('truncate')).toBe(false);
  });

  it('forwards the element-specific ref', () => {
    const ref = createRef<HTMLAnchorElement>();

    render(
      <Text.A ref={ref} href="/docs">
        Documentation
      </Text.A>,
    );

    expect(ref.current?.tagName).toBe('A');
  });
});
