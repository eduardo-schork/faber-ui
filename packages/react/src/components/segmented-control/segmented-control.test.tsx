import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { SEGMENTED_CONTROL_SIZES } from './segmented-control.constants';
import { Segment, SegmentedControl } from './segmented-control.ui';

describe('SegmentedControl', () => {
  afterEach(cleanup);

  it('SHOULD render a labelled group of native radios and forward the fieldset ref', () => {
    const ref = createRef<HTMLFieldSetElement>();
    const { getByRole } = render(
      <SegmentedControl ref={ref} label="Density">
        <Segment name="density" value="comfortable" defaultChecked>
          Comfortable
        </Segment>
        <Segment name="density" value="compact">
          Compact
        </Segment>
      </SegmentedControl>,
    );
    const group = getByRole('group', { name: 'Density' });

    expect(group.tagName).toBe('FIELDSET');
    expect(group.getAttribute('data-size')).toBe(SEGMENTED_CONTROL_SIZES.MEDIUM);
    expect((getByRole('radio', { name: 'Comfortable' }) as HTMLInputElement).checked).toBe(true);
    expect(ref.current).toBe(group);
  });

  it('SHOULD select one segment at a time and report changes natively', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(
      <SegmentedControl label="Density">
        <Segment name="density" value="comfortable" defaultChecked onChange={handleChange}>
          Comfortable
        </Segment>
        <Segment name="density" value="compact" onChange={handleChange}>
          Compact
        </Segment>
      </SegmentedControl>,
    );
    const comfortable = getByRole('radio', { name: 'Comfortable' }) as HTMLInputElement;
    const compact = getByRole('radio', { name: 'Compact' }) as HTMLInputElement;

    fireEvent.click(compact);

    expect(compact.checked).toBe(true);
    expect(comfortable.checked).toBe(false);
    expect(handleChange).toHaveBeenCalledOnce();
  });

  it('SHOULD keep the label accessible WHEN it is visually hidden', () => {
    const { getByRole, getByText } = render(
      <SegmentedControl label="Density" labelHidden size={SEGMENTED_CONTROL_SIZES.SMALL}>
        <Segment name="density" value="compact">
          Compact
        </Segment>
      </SegmentedControl>,
    );

    expect(getByRole('group', { name: 'Density' }).getAttribute('data-size')).toBe('small');
    expect(getByText('Density').getAttribute('data-hidden')).toBe('true');
  });

  it('SHOULD forward the input ref and native attributes to each radio', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(
      <SegmentedControl label="Density">
        <Segment ref={ref} name="density" value="compact" disabled>
          Compact
        </Segment>
      </SegmentedControl>,
    );
    const radio = getByRole('radio', { name: 'Compact' }) as HTMLInputElement;

    expect(ref.current).toBe(radio);
    expect(radio.disabled).toBe(true);
    expect(radio.name).toBe('density');
    expect(radio.value).toBe('compact');
  });
});
