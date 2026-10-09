import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Title } from './title.ui';

describe('Title', () => {
  afterEach(cleanup);

  it('SHOULD render every heading level with semantic markup', () => {
    const { getByRole } = render(
      <div>
        <Title.H1>Heading 1</Title.H1>
        <Title.H2>Heading 2</Title.H2>
        <Title.H3>Heading 3</Title.H3>
        <Title.H4>Heading 4</Title.H4>
        <Title.H5>Heading 5</Title.H5>
        <Title.H6>Heading 6</Title.H6>
      </div>,
    );

    for (const level of [1, 2, 3, 4, 5, 6] as const) {
      expect(getByRole('heading', { level }).textContent).toBe(`Heading ${String(level)}`);
    }
  });

  it('SHOULD accept a display size without changing the heading level', () => {
    const { getByRole } = render(<Title.H2 size="display-large">Hero</Title.H2>);

    expect(getByRole('heading', { level: 2 }).getAttribute('data-size')).toBe('display-large');
  });

  it('SHOULD provide the approved visual defaults independently from semantic level', () => {
    const { getByRole } = render(<Title.H1>Page title</Title.H1>);
    const title = getByRole('heading', { level: 1 });

    expect(title.getAttribute('data-size')).toBe('largest');
    expect(title.getAttribute('data-weight')).toBe('bold');
    expect(title.getAttribute('data-line-height')).toBe('tight');
  });

  it('SHOULD allow visual overrides without changing semantic markup', () => {
    const { getByRole } = render(
      <Title.H1 size="medium" tone="accent" truncate weight="medium">
        Compact page title
      </Title.H1>,
    );
    const title = getByRole('heading', { level: 1 });

    expect(title.tagName).toBe('H1');
    expect(title.getAttribute('data-size')).toBe('medium');
    expect(title.getAttribute('data-tone')).toBe('accent');
    expect(title.getAttribute('data-truncate')).toBe('true');
    expect(title.getAttribute('data-weight')).toBe('medium');
  });

  it('SHOULD forward native props and the heading ref', () => {
    const ref = createRef<HTMLHeadingElement>();
    const { getByRole } = render(
      <Title.H2 ref={ref} id="overview" aria-describedby="overview-description">
        Overview
      </Title.H2>,
    );
    const title = getByRole('heading', { level: 2 });

    expect(title.getAttribute('id')).toBe('overview');
    expect(title.getAttribute('aria-describedby')).toBe('overview-description');
    expect(ref.current).toBe(title);
  });
});
