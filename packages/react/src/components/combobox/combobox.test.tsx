import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Field } from '../field';
import { Combobox } from './combobox.ui';

const OPTIONS = [
  { value: 'fra', label: 'Frankfurt' },
  { value: 'dub', label: 'Dublin' },
  { value: 'gru', label: 'São Paulo' },
  { value: 'iad', label: 'Virginia', disabled: true },
] as const;

describe('Combobox', () => {
  afterEach(cleanup);

  it('SHOULD expose a collapsed combobox that shows the selected label', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole, queryByRole } = render(
      <Combobox ref={ref} aria-label="Region" options={OPTIONS} defaultValue="dub" />,
    );
    const input = getByRole('combobox', { name: 'Region' }) as HTMLInputElement;

    expect(ref.current).toBe(input);
    expect(input.value).toBe('Dublin');
    expect(input.getAttribute('aria-expanded')).toBe('false');
    expect(input.closest('.faber-ui-combobox')).not.toBeNull();
    expect(queryByRole('listbox')).toBeNull();
  });

  it('SHOULD filter the options by the typed text', () => {
    const { getAllByRole, getByRole, getByText } = render(
      <Combobox aria-label="Region" options={OPTIONS} emptyMessage="Nothing found" />,
    );
    const input = getByRole('combobox', { name: 'Region' });

    fireEvent.change(input, { target: { value: 'fr' } });
    expect(getAllByRole('option').map((option) => option.textContent)).toEqual(['Frankfurt']);
    expect(input.getAttribute('aria-activedescendant')).toBe(getAllByRole('option')[0]?.id);

    fireEvent.change(input, { target: { value: 'zzz' } });
    expect(getByText('Nothing found')).toBeDefined();
  });

  it('SHOULD choose with the keyboard, skip disabled options, and close', () => {
    const onValueChange = vi.fn();
    const { getAllByRole, getByRole, queryByRole } = render(
      <Combobox aria-label="Region" options={OPTIONS} onValueChange={onValueChange} />,
    );
    const input = getByRole('combobox', { name: 'Region' }) as HTMLInputElement;

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(getAllByRole('option')).toHaveLength(4);
    expect(input.getAttribute('aria-activedescendant')).toBe(getAllByRole('option')[0]?.id);

    fireEvent.keyDown(input, { key: 'ArrowUp' });
    expect(input.getAttribute('aria-activedescendant')).toBe(getAllByRole('option')[2]?.id);

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onValueChange).toHaveBeenCalledWith('gru');
    expect(input.value).toBe('São Paulo');
    expect(queryByRole('listbox')).toBeNull();
  });

  it('SHOULD restore the selected label WHEN the list is dismissed', () => {
    const { getByRole, queryByRole } = render(
      <Combobox aria-label="Region" options={OPTIONS} defaultValue="dub" />,
    );
    const input = getByRole('combobox', { name: 'Region' }) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'fra' } });
    fireEvent.keyDown(input, { key: 'Escape' });

    expect(input.value).toBe('Dublin');
    expect(queryByRole('listbox')).toBeNull();
  });

  it('SHOULD choose with the mouse and submit the value with the form', () => {
    const { container, getByRole } = render(
      <form>
        <Combobox aria-label="Region" name="region" options={OPTIONS} />
      </form>,
    );

    fireEvent.mouseDown(getByRole('combobox', { name: 'Region' }));
    fireEvent.click(getByRole('option', { name: 'Frankfurt' }));

    expect(new FormData(container.querySelector('form') ?? undefined).get('region')).toBe('fra');
  });

  it('SHOULD keep several values as removable chips WHEN multiple', () => {
    const onValueChange = vi.fn();
    const { container, getByRole } = render(
      <form>
        <Combobox
          multiple
          aria-label="Regions"
          name="regions"
          options={OPTIONS}
          defaultValue={['fra']}
          onValueChange={onValueChange}
        />
      </form>,
    );
    const input = getByRole('combobox', { name: 'Regions' }) as HTMLInputElement;

    fireEvent.keyDown(input, { key: 'ArrowDown' });
    expect(getByRole('listbox').getAttribute('aria-multiselectable')).toBe('true');

    fireEvent.click(getByRole('option', { name: 'Dublin' }));
    expect(onValueChange).toHaveBeenLastCalledWith(['fra', 'dub']);
    expect(getByRole('listbox')).toBeDefined();
    expect(new FormData(container.querySelector('form') ?? undefined).getAll('regions')).toEqual([
      'fra',
      'dub',
    ]);

    fireEvent.click(getByRole('button', { name: 'Remove Frankfurt' }));
    expect(onValueChange).toHaveBeenLastCalledWith(['dub']);

    fireEvent.keyDown(input, { key: 'Backspace' });
    expect(onValueChange).toHaveBeenLastCalledWith([]);
  });

  it('SHOULD take its label and error from Field', () => {
    const { getByRole, getByText } = render(
      <Field label="Region" error="Choose a region.">
        <Combobox options={OPTIONS} />
      </Field>,
    );
    const input = getByRole('combobox', { name: 'Region' });

    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toContain(getByText('Choose a region.').id);
  });

  it('SHOULD not open WHEN disabled', () => {
    const { getByRole, queryByRole } = render(
      <Combobox aria-label="Region" options={OPTIONS} disabled />,
    );

    fireEvent.keyDown(getByRole('combobox', { name: 'Region' }), { key: 'ArrowDown' });

    expect(queryByRole('listbox')).toBeNull();
  });
});
