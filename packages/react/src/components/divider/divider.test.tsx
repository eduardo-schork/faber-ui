import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { DIVIDER_ORIENTATIONS } from './divider.constants';
import { Divider } from './divider.ui';

describe('Divider', () => {
  afterEach(cleanup);

  it('SHOULD render a horizontal separator and forward its ref by default', () => {
    const ref = createRef<HTMLHRElement>();
    const { getByRole } = render(<Divider ref={ref} />);
    const divider = getByRole('separator');

    expect(divider.tagName).toBe('HR');
    expect(divider.getAttribute('aria-orientation')).toBe(DIVIDER_ORIENTATIONS.HORIZONTAL);
    expect(ref.current).toBe(divider);
  });

  it('SHOULD expose vertical orientation and native props', () => {
    const { getByRole } = render(
      <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} aria-label="Section boundary" />,
    );

    expect(
      getByRole('separator', { name: 'Section boundary' }).getAttribute('aria-orientation'),
    ).toBe(DIVIDER_ORIENTATIONS.VERTICAL);
  });
});
