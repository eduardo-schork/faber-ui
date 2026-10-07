import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Table } from './table.ui';

describe('Table', () => {
  afterEach(cleanup);

  it('SHOULD render a native table with native sections and forward its ref', () => {
    const ref = createRef<HTMLTableElement>();
    const { getByRole } = render(
      <Table ref={ref} className="consumer">
        <caption>Components</caption>
        <thead>
          <tr>
            <th scope="col">Component</th>
            <th scope="col">Renders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Button</th>
            <td>button</td>
          </tr>
        </tbody>
      </Table>,
    );
    const table = getByRole('table', { name: 'Components' });

    expect(table.tagName).toBe('TABLE');
    expect(table.classList.contains('consumer')).toBe(true);
    expect(getByRole('columnheader', { name: 'Renders' })).toBeDefined();
    expect(getByRole('rowheader', { name: 'Button' })).toBeDefined();
    expect(getByRole('cell', { name: 'button' })).toBeDefined();
    expect(ref.current).toBe(table);
  });
});
