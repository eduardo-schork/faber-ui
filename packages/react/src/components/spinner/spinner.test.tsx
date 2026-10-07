import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { SPINNER_SIZES } from './spinner.constants';
import { Spinner } from './spinner.ui';

describe('Spinner', () => {
  afterEach(cleanup);

  it('SHOULD announce loading state and forward its ref', () => {
    const ref = createRef<HTMLSpanElement>();
    const { getByRole } = render(<Spinner ref={ref} label="Loading materials" />);
    const spinner = getByRole('status', { name: 'Loading materials' });

    expect(ref.current).toBe(spinner);
    expect(spinner.getAttribute('data-size')).toBe(SPINNER_SIZES.MEDIUM);
  });

  it('SHOULD hide decorative instances from assistive technology', () => {
    const { container, queryByRole } = render(
      <Spinner decorative size={SPINNER_SIZES.CURRENT} data-testid="spinner" />,
    );
    const spinner = container.querySelector('[data-testid="spinner"]');

    expect(queryByRole('status')).toBeNull();
    expect(spinner?.getAttribute('aria-hidden')).toBe('true');
  });
});
