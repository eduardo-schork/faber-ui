import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { EmptyState } from './empty-state.ui';

describe('EmptyState', () => {
  afterEach(cleanup);

  it('SHOULD render a heading, a description, decorative media, and actions', () => {
    const ref = createRef<HTMLDivElement>();
    const { container, getByRole, getByText } = render(
      <EmptyState
        ref={ref}
        title="No invoices yet"
        description="Invoices appear here after the first payment."
        media={<svg />}
        actions={<button type="button">Create invoice</button>}
      />,
    );

    expect(ref.current?.classList.contains('faber-ui-empty-state')).toBe(true);
    expect(getByRole('heading', { level: 3, name: 'No invoices yet' })).toBeDefined();
    expect(getByText('Invoices appear here after the first payment.')).toBeDefined();
    expect(
      container.querySelector('.faber-ui-empty-state-media')?.getAttribute('aria-hidden'),
    ).toBe('true');
    expect(getByRole('button', { name: 'Create invoice' })).toBeDefined();
  });

  it('SHOULD render only the title WHEN nothing else is given', () => {
    const { container } = render(<EmptyState title="Nothing here" />);

    expect(container.querySelector('.faber-ui-empty-state')?.childElementCount).toBe(1);
  });
});
