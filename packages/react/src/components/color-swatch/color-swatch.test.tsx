import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { COLOR_SWATCH_ORIENTATIONS } from './color-swatch.constants';
import { ColorSwatch } from './color-swatch.ui';

describe('ColorSwatch', () => {
  afterEach(cleanup);

  it('SHOULD paint the sample and show the name and value', () => {
    const ref = createRef<HTMLDivElement>();
    const { container, getByText } = render(
      <ColorSwatch ref={ref} color="rgb(102, 51, 153)" label="PRIMARY" value="#663399" />,
    );
    const sample = container.querySelector<HTMLElement>('.faber-ui-color-swatch-sample');

    expect(ref.current?.classList.contains('faber-ui-color-swatch')).toBe(true);
    expect(ref.current?.getAttribute('data-orientation')).toBe('horizontal');
    expect(sample?.style.background).toBe('rgb(102, 51, 153)');
    expect(sample?.getAttribute('aria-hidden')).toBe('true');
    expect(getByText('PRIMARY')).toBeDefined();
    expect(getByText('#663399')).toBeDefined();
  });

  it('SHOULD render the sample alone WHEN no text is given', () => {
    const { container } = render(
      <ColorSwatch color="red" orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL} />,
    );

    expect(container.querySelector('.faber-ui-color-swatch')?.childElementCount).toBe(1);
    expect(
      container.querySelector('.faber-ui-color-swatch')?.getAttribute('data-orientation'),
    ).toBe('vertical');
  });
});
