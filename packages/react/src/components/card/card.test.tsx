import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { CARD_PADDINGS } from './card.constants';
import { Card } from './card.ui';

const ConsumerCard = styled(Card)``;

describe('Card', () => {
  afterEach(cleanup);

  it('SHOULD render a neutral container with medium padding and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByText } = render(<Card ref={ref}>Content</Card>);
    const card = getByText('Content');

    expect(card.tagName).toBe('DIV');
    expect(card.getAttribute('data-padding')).toBe(CARD_PADDINGS.MEDIUM);
    expect(ref.current).toBe(card);
  });

  it('SHOULD render the requested semantic element WHEN as is provided', () => {
    const { getByRole } = render(
      <Card as="section" aria-label="Billing" padding={CARD_PADDINGS.NONE}>
        Content
      </Card>,
    );
    const card = getByRole('region', { name: 'Billing' });

    expect(card.tagName).toBe('SECTION');
    expect(card.getAttribute('data-padding')).toBe(CARD_PADDINGS.NONE);
    expect(card.hasAttribute('padding')).toBe(false);
  });

  it('SHOULD preserve className composition WHEN wrapped by styled-components', () => {
    const { getByText } = render(<ConsumerCard className="consumer">Content</ConsumerCard>);

    expect(getByText('Content').classList.contains('consumer')).toBe(true);
  });
});
