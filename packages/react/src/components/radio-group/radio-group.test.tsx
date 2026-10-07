import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Radio } from '../radio';
import { RadioGroupLabel, RadioGroupOptions, RadioGroupRoot } from './radio-group.styles';
import { RadioGroup } from './radio-group.ui';

describe('RadioGroup', () => {
  afterEach(cleanup);

  it('SHOULD render an accessible native group and forward its ref', () => {
    const ref = createRef<HTMLFieldSetElement>();
    const { getByRole } = render(
      <RadioGroup ref={ref} label="Material">
        <Radio label="Copper" name="material" value="copper" />
        <Radio label="Steel" name="material" value="steel" />
      </RadioGroup>,
    );
    const group = getByRole('group', { name: 'Material' });

    expect(group.tagName).toBe('FIELDSET');
    expect(ref.current).toBe(group);
    expect(getByRole('radio', { name: 'Copper' }).getAttribute('name')).toBe('material');
  });

  it('SHOULD connect group description and validation error', () => {
    const { getByRole, getByText } = render(
      <RadioGroup label="Material" description="Choose one." error="A material is required.">
        <Radio label="Copper" name="material" value="copper" />
      </RadioGroup>,
    );
    const group = getByRole('group', { name: 'Material' });
    const description = getByText('Choose one.');
    const error = getByText('A material is required.');

    expect(group.getAttribute('aria-invalid')).toBe('true');
    expect(group.getAttribute('aria-describedby')).toBe(`${description.id} ${error.id}`);
    expect(error.getAttribute('aria-live')).toBe('polite');
  });

  it('SHOULD let a consumer assemble a group from its parts', () => {
    const { getByRole } = render(
      <RadioGroupRoot>
        <RadioGroupLabel>Plan</RadioGroupLabel>
        <RadioGroupOptions>
          <input type="radio" name="plan" aria-label="Starter" />
        </RadioGroupOptions>
      </RadioGroupRoot>,
    );
    const group = getByRole('group', { name: 'Plan' });

    expect(group.tagName).toBe('FIELDSET');
    expect(group.contains(getByRole('radio', { name: 'Starter' }))).toBe(true);
  });
});
