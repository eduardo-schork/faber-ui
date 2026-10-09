import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { Field } from '../field';
import { Listbox, ListboxGroup, ListboxOption, ListboxSeparator } from './listbox.ui';

const OPTIONS = (
  <>
    <ListboxOption value="viewer">Viewer</ListboxOption>
    <ListboxOption value="editor">Editor</ListboxOption>
    <ListboxOption value="admin" disabled>
      Admin
    </ListboxOption>
  </>
);

describe('Listbox', () => {
  // jsdom lacks the pointer-capture and scrolling methods the primitive calls when it opens.
  beforeAll(() => {
    Element.prototype.hasPointerCapture = () => false;
    Element.prototype.releasePointerCapture = () => undefined;
    Element.prototype.scrollIntoView = () => undefined;
  });

  afterEach(cleanup);

  it('SHOULD expose a collapsed combobox with a placeholder WHEN nothing is selected', () => {
    const ref = createRef<HTMLButtonElement>();
    const { getByRole, queryByRole } = render(
      <Listbox ref={ref} aria-label="Role" placeholder="Choose a role">
        {OPTIONS}
      </Listbox>,
    );
    const trigger = getByRole('combobox', { name: 'Role' });

    expect(ref.current).toBe(trigger);
    expect(trigger.classList.contains('faber-ui-listbox')).toBe(true);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(trigger.textContent).toContain('Choose a role');
    expect(queryByRole('listbox')).toBeNull();
  });

  it('SHOULD show the selected option and submit it with the form', () => {
    const { container, getByRole } = render(
      <form>
        <Listbox aria-label="Role" name="role" defaultValue="editor">
          {OPTIONS}
        </Listbox>
      </form>,
    );

    expect(getByRole('combobox', { name: 'Role' }).textContent).toContain('Editor');
    expect(new FormData(container.querySelector('form') ?? undefined).get('role')).toBe('editor');
  });

  it('SHOULD list its options, groups, and separators WHEN open', () => {
    const { getAllByRole, getByRole, getByText } = render(
      <Listbox aria-label="Region" defaultOpen defaultValue="fra">
        <ListboxGroup label="Europe">
          <ListboxOption value="fra">Frankfurt</ListboxOption>
        </ListboxGroup>
        <ListboxSeparator />
        <ListboxGroup label="Americas">
          <ListboxOption value="gru">São Paulo</ListboxOption>
          <ListboxOption value="iad" disabled>
            Virginia
          </ListboxOption>
        </ListboxGroup>
      </Listbox>,
    );

    expect(getByRole('listbox')).toBeDefined();
    expect(getAllByRole('option')).toHaveLength(3);
    expect(getAllByRole('group')).toHaveLength(2);
    expect(getByText('Americas')).toBeDefined();
    expect(getByRole('option', { name: 'Frankfurt' }).getAttribute('data-state')).toBe('checked');
    expect(getByRole('option', { name: 'Virginia' }).getAttribute('aria-disabled')).toBe('true');
  });

  it('SHOULD report the new value WHEN an option is chosen with the keyboard', () => {
    const onValueChange = vi.fn();
    const { getByRole } = render(
      <Listbox aria-label="Role" defaultOpen defaultValue="viewer" onValueChange={onValueChange}>
        {OPTIONS}
      </Listbox>,
    );
    const option = getByRole('option', { name: 'Editor' });

    option.focus();
    fireEvent.keyDown(option, { key: 'Enter' });

    expect(onValueChange).toHaveBeenCalledWith('editor');
  });

  it('SHOULD take its label, description, and error from Field', () => {
    const { getByRole, getByText } = render(
      <Field label="Role" description="Decides what they can change." error="Choose a role.">
        <Listbox placeholder="Choose a role">{OPTIONS}</Listbox>
      </Field>,
    );
    const trigger = getByRole('combobox', { name: 'Role' });

    expect(trigger.getAttribute('aria-invalid')).toBe('true');
    expect(trigger.getAttribute('aria-describedby')).toContain(getByText('Choose a role.').id);
  });

  it('SHOULD not open WHEN disabled', () => {
    const { getByRole, queryByRole } = render(
      <Listbox aria-label="Role" disabled>
        {OPTIONS}
      </Listbox>,
    );

    fireEvent.click(getByRole('combobox', { name: 'Role' }));

    expect(queryByRole('listbox')).toBeNull();
  });
});
