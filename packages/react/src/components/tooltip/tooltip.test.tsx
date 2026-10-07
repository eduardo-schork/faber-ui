import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { Button } from '../button';
import { Tooltip } from './tooltip.ui';

describe('Tooltip', () => {
  afterEach(cleanup);

  it('SHOULD render only the trigger WHEN closed', () => {
    const { getByRole, queryByRole } = render(
      <Tooltip content="Copy the link">
        <Button>Copy</Button>
      </Tooltip>,
    );

    expect(getByRole('button', { name: 'Copy' })).toBeDefined();
    expect(queryByRole('tooltip')).toBeNull();
  });

  it('SHOULD describe its trigger WHEN open', () => {
    const { getByRole } = render(
      <Tooltip content="Copy the link" open>
        <Button>Copy</Button>
      </Tooltip>,
    );
    const tooltip = getByRole('tooltip');

    expect(tooltip.textContent).toBe('Copy the link');
    expect(getByRole('button', { name: 'Copy' }).getAttribute('aria-describedby')).toBe(tooltip.id);
  });
});
