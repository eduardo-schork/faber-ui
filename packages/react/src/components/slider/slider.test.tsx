import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Field } from '../field';
import { Slider } from './slider.ui';

describe('Slider', () => {
  afterEach(cleanup);

  it('SHOULD render a native range input, report changes, and forward its ref', () => {
    const ref = createRef<HTMLInputElement>();
    const handleChange = vi.fn();
    const { getByRole } = render(
      <Slider
        ref={ref}
        aria-label="Volume"
        min={0}
        max={10}
        defaultValue={4}
        onChange={handleChange}
      />,
    );
    const slider = getByRole('slider', { name: 'Volume' }) as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '7' } });

    expect(slider.type).toBe('range');
    expect(slider.value).toBe('7');
    expect(handleChange).toHaveBeenCalledOnce();
    expect(ref.current).toBe(slider);
  });

  it('SHOULD take its label and messages from Field', () => {
    const { getByRole } = render(
      <Field label="Volume" description="From quiet to loud.">
        <Slider name="volume" />
      </Field>,
    );
    const slider = getByRole('slider', { name: 'Volume' });

    expect(slider.getAttribute('aria-describedby')).not.toBeNull();
  });
});
