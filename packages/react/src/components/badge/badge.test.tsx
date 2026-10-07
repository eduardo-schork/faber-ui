import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { BADGE_COLORS } from './badge.constants';
import { Badge } from './badge.ui';

const ConsumerBadge = styled(Badge)``;

describe('Badge', () => {
  afterEach(cleanup);

  it('SHOULD render semantic inline content and forward its ref', () => {
    const ref = createRef<HTMLSpanElement>();
    const { getByText } = render(<Badge ref={ref}>Stable</Badge>);
    const badge = getByText('Stable');

    expect(badge.tagName).toBe('SPAN');
    expect(ref.current).toBe(badge);
  });

  it('SHOULD expose a closed color contract and styled-components composition', () => {
    const { getByText } = render(
      <ConsumerBadge color={BADGE_COLORS.ACCENT} className="consumer">
        Experimental
      </ConsumerBadge>,
    );
    const badge = getByText('Experimental');

    expect(badge.getAttribute('data-color')).toBe(BADGE_COLORS.ACCENT);
    expect(badge.classList.contains('consumer')).toBe(true);
  });
});
