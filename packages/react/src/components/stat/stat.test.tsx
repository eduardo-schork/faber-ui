import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { STAT_TRENDS } from './stat.constants';
import { Stat } from './stat.ui';

describe('Stat', () => {
  afterEach(cleanup);

  it('SHOULD show the label, the value, the change, and the helper', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByText } = render(
      <Stat
        ref={ref}
        label="Revenue"
        value="$48,200"
        change="+12%"
        trend={STAT_TRENDS.POSITIVE}
        helper="Last 30 days"
      />,
    );

    expect(ref.current?.classList.contains('faber-ui-stat')).toBe(true);
    expect(getByText('Revenue')).toBeDefined();
    expect(getByText('$48,200')).toBeDefined();
    expect(getByText('+12%').getAttribute('data-trend')).toBe('positive');
    expect(getByText('Last 30 days')).toBeDefined();
  });

  it('SHOULD default to a neutral trend and leave out what is not given', () => {
    const { container, getByText } = render(<Stat label="Seats" value="12" change="0" />);

    expect(getByText('0').getAttribute('data-trend')).toBe('neutral');
    expect(container.querySelector('.faber-ui-stat-helper')).toBeNull();
  });
});
