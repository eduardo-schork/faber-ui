import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Radio } from './radio.ui';

const ConsumerRadio = styled(Radio)``;

describe('Radio', () => {
  afterEach(cleanup);

  it('SHOULD render a labeled native radio and forward its input ref', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(
      <Radio label="Light" name="theme" value="light" ref={ref} required />,
    );
    const control = getByRole('radio', { name: 'Light' }) as HTMLInputElement;

    expect(control.type).toBe('radio');
    expect(control.name).toBe('theme');
    expect(control.value).toBe('light');
    expect(control.required).toBe(true);
    expect(ref.current).toBe(control);
  });

  it('SHOULD preserve native exclusivity within a named fieldset', () => {
    const onChange = vi.fn();
    const { getByRole, getByText } = render(
      <fieldset>
        <legend>Theme</legend>
        <Radio label="Light" name="theme" value="light" defaultChecked />
        <Radio label="Dark" name="theme" value="dark" onChange={onChange} />
      </fieldset>,
    );
    const light = getByRole('radio', { name: 'Light' }) as HTMLInputElement;
    const dark = getByRole('radio', { name: 'Dark' }) as HTMLInputElement;

    expect(light.checked).toBe(true);
    fireEvent.click(getByText('Dark'));
    expect(light.checked).toBe(false);
    expect(dark.checked).toBe(true);
    expect(onChange).toHaveBeenCalledOnce();
    expect(getByRole('group', { name: 'Theme' })).not.toBeNull();
  });

  it('SHOULD preserve controlled and disabled native state', () => {
    const { getByRole } = render(
      <Radio
        label="Locked"
        name="choice"
        value="locked"
        checked
        disabled
        onChange={() => undefined}
      />,
    );
    const control = getByRole('radio', { name: 'Locked' }) as HTMLInputElement;

    expect(control.checked).toBe(true);
    expect(control.disabled).toBe(true);
  });

  it('SHOULD connect description and error to the option', () => {
    const { getByRole, getByText } = render(
      <Radio
        label="Dark"
        name="theme"
        value="dark"
        description="Lower luminance."
        error="This option is unavailable."
      />,
    );
    const control = getByRole('radio', { name: 'Dark' });

    expect(control.getAttribute('aria-invalid')).toBe('true');
    expect(control.getAttribute('aria-describedby')).toBe(
      `${getByText('Lower luminance.').id} ${getByText('This option is unavailable.').id}`,
    );
  });

  it('SHOULD accept a styled-components wrapper class', () => {
    const { getByRole } = render(
      <ConsumerRadio label="Light" name="theme" value="light" className="consumer" />,
    );

    expect(getByRole('radio', { name: 'Light' }).closest('.consumer')).not.toBeNull();
  });
});
