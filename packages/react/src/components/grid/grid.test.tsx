import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { Grid } from './grid.ui';

describe('Grid', () => {
  afterEach(cleanup);

  it('SHOULD render a grid container and forward its ref', () => {
    const ref = createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Grid ref={ref} data-testid="grid" columns={3} gap="MD">
        <span>One</span>
      </Grid>,
    );
    const grid = getByTestId('grid');

    expect(getComputedStyle(grid).display).toBe('grid');
    expect(getComputedStyle(grid).gridTemplateColumns).toBe('repeat(3, minmax(0, 1fr))');
    expect(ref.current).toBe(grid);
  });

  it('SHOULD accept a track template WHEN columns is a string', () => {
    const { getByTestId } = render(<Grid data-testid="grid" columns="2fr 1fr" />);

    expect(getComputedStyle(getByTestId('grid')).gridTemplateColumns).toBe('2fr 1fr');
  });

  it('SHOULD fit columns to the width WHEN minColumnWidth is set', () => {
    const { getByTestId } = render(
      <Grid as="ul" data-testid="grid" columns={4} minColumnWidth="240px" />,
    );
    const grid = getByTestId('grid');

    expect(grid.tagName).toBe('UL');
    expect(grid.hasAttribute('data-auto-fit')).toBe(true);
    expect(grid.style.getPropertyValue('--faber-ui-grid-min-column-width')).toBe('240px');
    expect(grid.hasAttribute('columns')).toBe(false);
  });
});
