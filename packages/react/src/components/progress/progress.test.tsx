import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Progress } from './progress.ui';

describe('Progress', () => {
  afterEach(cleanup);

  it('SHOULD render a named native progress element and forward its ref', () => {
    const ref = createRef<HTMLProgressElement>();
    const { getByRole } = render(<Progress ref={ref} label="Upload" value={40} max={100} />);
    const progress = getByRole('progressbar', { name: 'Upload' }) as HTMLProgressElement;

    expect(progress.tagName).toBe('PROGRESS');
    expect(progress.value).toBe(40);
    expect(progress.max).toBe(100);
    expect(ref.current).toBe(progress);
  });

  it('SHOULD be indeterminate WHEN no value is provided', () => {
    const { getByRole } = render(<Progress label="Syncing" />);

    expect(getByRole('progressbar', { name: 'Syncing' }).hasAttribute('value')).toBe(false);
  });
});
