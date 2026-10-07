import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { LIST_MARKERS } from './list.constants';
import { List, ListItem } from './list.ui';

describe('List', () => {
  afterEach(cleanup);

  it('SHOULD render an unordered list of items and forward its ref', () => {
    const ref = createRef<HTMLUListElement>();
    const { getByRole, getAllByRole } = render(
      <List ref={ref}>
        <ListItem>One</ListItem>
        <ListItem>Two</ListItem>
      </List>,
    );
    const list = getByRole('list');

    expect(list.tagName).toBe('UL');
    expect(getAllByRole('listitem')).toHaveLength(2);
    expect(ref.current).toBe(list);
  });

  it('SHOULD render an ordered list WHEN ordered is set', () => {
    const { getByRole } = render(
      <List ordered>
        <ListItem>First</ListItem>
      </List>,
    );

    expect(getByRole('list').tagName).toBe('OL');
    expect(getByRole('list').hasAttribute('ordered')).toBe(false);
  });

  it('SHOULD keep list semantics WHEN the markers are removed', () => {
    const { getByRole } = render(
      <List marker={LIST_MARKERS.NONE}>
        <ListItem>Plain</ListItem>
      </List>,
    );
    const list = getByRole('list');

    expect(list.getAttribute('role')).toBe('list');
    expect(list.getAttribute('data-marker')).toBe(LIST_MARKERS.NONE);
  });
});
