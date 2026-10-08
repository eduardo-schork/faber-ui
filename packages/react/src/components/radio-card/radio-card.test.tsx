import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { RadioCard } from './radio-card.ui';

describe('RadioCard', () => {
  afterEach(cleanup);

  it('SHOULD render a native radio named by its label and description', () => {
    const ref = createRef<HTMLInputElement>();
    const { getByRole } = render(
      <RadioCard
        ref={ref}
        name="plan"
        value="team"
        label="Team"
        description="Up to 12 seats"
        media={<span data-testid="media" />}
      />,
    );
    const radio = getByRole('radio', { name: /Team.*Up to 12 seats/u });

    expect(ref.current).toBe(radio);
    expect(radio.getAttribute('value')).toBe('team');
    expect(radio.closest('label')?.classList.contains('faber-ui-radio-card')).toBe(true);
  });

  it('SHOULD select one card of a group WHEN a card is clicked', () => {
    const onChange = vi.fn();
    const { getByRole, getByText } = render(
      <>
        <RadioCard name="plan" value="solo" label="Solo" defaultChecked onChange={onChange} />
        <RadioCard name="plan" value="team" label="Team" onChange={onChange} />
      </>,
    );

    fireEvent.click(getByText('Team'));

    expect((getByRole('radio', { name: 'Team' }) as HTMLInputElement).checked).toBe(true);
    expect((getByRole('radio', { name: 'Solo' }) as HTMLInputElement).checked).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('SHOULD not select a disabled card', () => {
    const { getByRole, getByText } = render(
      <RadioCard name="plan" value="team" label="Team" disabled />,
    );

    fireEvent.click(getByText('Team'));

    expect((getByRole('radio', { name: 'Team' }) as HTMLInputElement).checked).toBe(false);
  });
});
