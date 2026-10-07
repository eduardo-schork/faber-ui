import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Skeleton } from './skeleton.ui';

describe('Skeleton', () => {
  afterEach(cleanup);

  it('SHOULD remain decorative and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(<Skeleton ref={ref} data-testid="skeleton" />);
    const skeleton = getByTestId('skeleton');

    expect(skeleton.getAttribute('aria-hidden')).toBe('true');
    expect(skeleton.getAttribute('data-animated')).toBe('true');
    expect(ref.current).toBe(skeleton);
  });

  it('SHOULD support static and circular visual states', () => {
    const { getByTestId } = render(
      <Skeleton animated={false} circle data-testid="skeleton" style={{ width: '80px' }} />,
    );
    const skeleton = getByTestId('skeleton');

    expect(skeleton.hasAttribute('data-animated')).toBe(false);
    expect(skeleton.getAttribute('data-circle')).toBe('true');
    expect(skeleton.getAttribute('style')).toContain('width: 80px');
  });
});
