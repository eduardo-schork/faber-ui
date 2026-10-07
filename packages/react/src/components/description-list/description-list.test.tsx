import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { DESCRIPTION_LIST_ORIENTATIONS } from './description-list.constants';
import {
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from './description-list.ui';

describe('DescriptionList', () => {
  afterEach(cleanup);

  it('SHOULD render native description list markup and forward its ref', () => {
    const ref = createRef<HTMLDListElement>();
    const { getByText } = render(
      <DescriptionList ref={ref}>
        <DescriptionItem>
          <DescriptionTerm>Plan</DescriptionTerm>
          <DescriptionDetails>Team</DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>,
    );

    expect(ref.current?.tagName).toBe('DL');
    expect(getByText('Plan').tagName).toBe('DT');
    expect(getByText('Team').tagName).toBe('DD');
    expect(getByText('Plan').parentElement?.parentElement).toBe(ref.current);
  });

  it('SHOULD expose the orientation as a data attribute', () => {
    const { container } = render(
      <DescriptionList orientation={DESCRIPTION_LIST_ORIENTATIONS.HORIZONTAL} />,
    );
    const list = container.querySelector('dl');

    expect(list?.getAttribute('data-orientation')).toBe(DESCRIPTION_LIST_ORIENTATIONS.HORIZONTAL);
    expect(list?.hasAttribute('orientation')).toBe(false);
  });
});
