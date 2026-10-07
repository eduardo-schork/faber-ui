import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Header } from './header.ui';

describe('Header', () => {
  afterEach(cleanup);

  it('SHOULD render the banner landmark and forward its ref', () => {
    const ref = createRef<HTMLElement>();
    const { getByRole } = render(<Header ref={ref}>Faber UI</Header>);
    const header = getByRole('banner');

    expect(header.tagName).toBe('HEADER');
    expect(header.hasAttribute('data-sticky')).toBe(false);
    expect(ref.current).toBe(header);
  });

  it('SHOULD expose the sticky state without forwarding the custom prop', () => {
    const { getByRole } = render(<Header sticky>Faber UI</Header>);
    const header = getByRole('banner');

    expect(header.getAttribute('data-sticky')).toBe('true');
    expect(header.hasAttribute('sticky')).toBe(false);
  });
});
