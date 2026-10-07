import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Field } from '../field';
import { Autocomplete } from './autocomplete.ui';

describe('Autocomplete', () => {
  afterEach(cleanup);

  it('SHOULD connect a native input to a datalist of suggestions and forward its ref', () => {
    const ref = createRef<HTMLInputElement>();
    const { container } = render(
      <Autocomplete ref={ref} aria-label="City" options={['Lisbon', 'Porto']} />,
    );
    const input = container.querySelector('input');
    const list = container.querySelector('datalist');

    expect(input?.getAttribute('list')).toBe(list?.id);
    expect(Array.from(list?.querySelectorAll('option') ?? []).map(({ value }) => value)).toEqual([
      'Lisbon',
      'Porto',
    ]);
    expect(ref.current).toBe(input);
  });

  it('SHOULD take its label from Field', () => {
    const { getByLabelText } = render(
      <Field label="City">
        <Autocomplete name="city" options={['Lisbon']} />
      </Field>,
    );

    expect(getByLabelText('City').getAttribute('name')).toBe('city');
  });
});
