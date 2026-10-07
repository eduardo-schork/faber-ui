import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import styled from 'styled-components';
import { afterEach, describe, expect, it } from 'vitest';

import { Box } from './box.ui';

const ConsumerBox = styled(Box)``;

describe('Box', () => {
  afterEach(cleanup);

  it('SHOULD render a block container and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByText } = render(<Box ref={ref}>Content</Box>);
    const box = getByText('Content');

    expect(box.tagName).toBe('DIV');
    expect(box.classList.contains('faber-ui-box')).toBe(true);
    expect(ref.current).toBe(box);
  });

  it('SHOULD render the requested element without forwarding style props', () => {
    const { getByRole } = render(
      <Box as="section" aria-label="Summary" padding="MD">
        Content
      </Box>,
    );
    const box = getByRole('region', { name: 'Summary' });

    expect(box.tagName).toBe('SECTION');
    expect(box.hasAttribute('padding')).toBe(false);
  });

  it('SHOULD preserve className composition WHEN wrapped by styled-components', () => {
    const { getByText } = render(<ConsumerBox className="consumer">Content</ConsumerBox>);

    expect(getByText('Content').classList.contains('consumer')).toBe(true);
  });
});
