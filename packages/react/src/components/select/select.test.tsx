import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Select } from './select.ui';

const ConsumerSelect = styled(Select)``;

describe('Select', () => {
  afterEach(cleanup);

  it('SHOULD render a native select and forward its ref', () => {
    const ref = createRef<HTMLSelectElement>();
    const { getByRole } = render(
      <Select ref={ref} aria-label="Material" name="material">
        <option value="copper">Copper</option>
      </Select>,
    );
    const select = getByRole('combobox', { name: 'Material' });

    expect(select.tagName).toBe('SELECT');
    expect(select.getAttribute('name')).toBe('material');
    expect(ref.current).toBe(select);
  });

  it('SHOULD preserve native values, events and validation attributes', () => {
    const onChange = vi.fn();
    const { getByRole } = render(
      <Select aria-label="Material" defaultValue="copper" required onChange={onChange}>
        <option value="copper">Copper</option>
        <option value="steel">Steel</option>
      </Select>,
    );
    const select = getByRole('combobox', { name: 'Material' }) as HTMLSelectElement;

    fireEvent.change(select, { target: { value: 'steel' } });

    expect(select.value).toBe('steel');
    expect(select.required).toBe(true);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD remain composable with styled-components', () => {
    const { getByRole } = render(
      <ConsumerSelect aria-label="Material" className="consumer">
        <option>Copper</option>
      </ConsumerSelect>,
    );

    expect(getByRole('combobox', { name: 'Material' }).classList.contains('consumer')).toBe(true);
  });
});
