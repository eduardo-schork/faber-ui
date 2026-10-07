import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Input } from '../input';
import { FieldDescription, FieldLabel, FieldRoot } from './field.styles';
import { Field } from './field.ui';

describe('Field', () => {
  afterEach(cleanup);

  it('SHOULD associate its label and description with the control', () => {
    const { getByRole, getByText } = render(
      <Field label="Email" description="We will send updates here.">
        <Input name="email" />
      </Field>,
    );
    const control = getByRole('textbox', {
      name: 'Email',
      description: 'We will send updates here.',
    });
    const label = getByText('Email');
    const description = getByText('We will send updates here.');

    expect(label.getAttribute('for')).toBe(control.id);
    expect(control.getAttribute('aria-describedby')).toBe(description.id);
  });

  it('SHOULD expose an error accessibly WHEN validation fails', () => {
    const { getByRole, getByText } = render(
      <Field label="Email" error="Enter a valid email address.">
        <Input name="email" />
      </Field>,
    );
    const control = getByRole('textbox', { name: 'Email' });
    const error = getByText('Enter a valid email address.');

    expect(control.getAttribute('aria-invalid')).toBe('true');
    expect(control.getAttribute('aria-describedby')).toBe(error.id);
    expect(error.getAttribute('aria-live')).toBe('polite');
  });

  it('SHOULD combine description and error IDs WHEN both are present', () => {
    const { getByRole, getByText } = render(
      <Field label="Email" description="Use your work email." error="This address is invalid.">
        <Input name="email" />
      </Field>,
    );
    const control = getByRole('textbox', { name: 'Email' });

    expect(control.getAttribute('aria-describedby')).toBe(
      `${getByText('Use your work email.').id} ${getByText('This address is invalid.').id}`,
    );
  });

  it('SHOULD preserve the control ID, ARIA description, events, and ref', () => {
    const controlRef = createRef<HTMLInputElement>();
    const onChange = vi.fn();
    const { getByRole, getByText } = render(
      <>
        <span id="external-help">External hint</span>
        <Field label="Search" description="Local hint">
          <Input
            id="search-input"
            name="search"
            aria-describedby="external-help"
            onChange={onChange}
            ref={controlRef}
          />
        </Field>
      </>,
    );
    const control = getByRole('textbox', { name: 'Search' });

    fireEvent.change(control, { target: { value: 'Faber' } });

    expect(control.id).toBe('search-input');
    expect(getByText('Search').getAttribute('for')).toBe(control.id);
    expect(control.getAttribute('aria-describedby')).toBe(
      `external-help ${getByText('Local hint').id}`,
    );
    expect(controlRef.current).toBe(control);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD hide an error WHEN invalid is explicitly false', () => {
    const { getByRole, queryByText } = render(
      <Field label="Email" error="Old error" invalid={false}>
        <Input name="email" />
      </Field>,
    );
    const control = getByRole('textbox', { name: 'Email' });

    expect(control.hasAttribute('aria-invalid')).toBe(false);
    expect(queryByText('Old error')).toBeNull();
  });

  it('SHOULD preserve the field container ref and native attributes', () => {
    const fieldRef = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Field ref={fieldRef} data-testid="field" label="Name">
        <Input />
      </Field>,
    );

    expect(fieldRef.current).toBe(getByTestId('field'));
  });

  it('SHOULD associate a native textarea without depending on Input', () => {
    const { getByRole } = render(
      <Field label="Notes">
        <textarea name="notes" />
      </Field>,
    );

    expect(getByRole('textbox', { name: 'Notes' }).tagName).toBe('TEXTAREA');
  });

  it('SHOULD let a consumer assemble a field from its parts', () => {
    const { getByRole } = render(
      <FieldRoot>
        <FieldDescription id="hint">Shown above the control.</FieldDescription>
        <Input id="name" aria-describedby="hint" />
        <FieldLabel htmlFor="name">Name</FieldLabel>
      </FieldRoot>,
    );
    const input = getByRole('textbox', { name: 'Name' });

    expect(input.previousElementSibling?.tagName).toBe('P');
    expect(input.nextElementSibling?.tagName).toBe('LABEL');
  });
});
