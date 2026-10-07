import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Field } from '../field';
import { Textarea } from './textarea.ui';

const ConsumerTextarea = styled(Textarea)``;

describe('Textarea', () => {
  afterEach(cleanup);

  it('SHOULD render a native multiline control and forward its ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    const { getByRole } = render(<Textarea ref={ref} aria-label="Notes" rows={4} />);
    const control = getByRole('textbox', { name: 'Notes' });

    expect(control.tagName).toBe('TEXTAREA');
    expect(control.getAttribute('rows')).toBe('4');
    expect(ref.current).toBe(control);
  });

  it('SHOULD preserve native attributes, events, and uncontrolled value', () => {
    const onChange = vi.fn();
    const { getByRole } = render(
      <Textarea
        aria-label="Notes"
        defaultValue="Initial"
        name="notes"
        onChange={onChange}
        required
      />,
    );
    const control = getByRole('textbox', { name: 'Notes' }) as HTMLTextAreaElement;

    expect(control.value).toBe('Initial');
    fireEvent.change(control, { target: { value: 'Updated' } });
    expect(control.value).toBe('Updated');
    expect(control.name).toBe('notes');
    expect(control.required).toBe(true);
    expect(onChange).toHaveBeenCalledOnce();
  });

  it('SHOULD preserve controlled value and disabled state', () => {
    const { getByRole } = render(
      <Textarea aria-label="Notes" disabled value="Controlled" onChange={() => undefined} />,
    );
    const control = getByRole('textbox', { name: 'Notes' }) as HTMLTextAreaElement;

    expect(control.value).toBe('Controlled');
    expect(control.disabled).toBe(true);
  });

  it('SHOULD compose with Field for accessible validation', () => {
    const { getByRole, getByText } = render(
      <Field label="Notes" error="Notes are required.">
        <Textarea name="notes" />
      </Field>,
    );
    const control = getByRole('textbox', { name: 'Notes' });

    expect(control.getAttribute('aria-invalid')).toBe('true');
    expect(control.getAttribute('aria-describedby')).toBe(getByText('Notes are required.').id);
  });

  it('SHOULD remain composable with styled-components', () => {
    const { getByRole } = render(<ConsumerTextarea aria-label="Notes" className="consumer" />);
    const control = getByRole('textbox', { name: 'Notes' });

    expect(control.classList.contains('consumer')).toBe(true);
    expect(control.classList.length).toBeGreaterThan(1);
  });
});
