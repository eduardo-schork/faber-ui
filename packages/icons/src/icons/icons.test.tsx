import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import * as icons from '../index';
import { ICON_SIZES } from '../icon/icon.constants';
import { CloseIcon } from './icons.ui';

describe('icons', () => {
  afterEach(cleanup);

  it('SHOULD render a decorative svg that inherits the text color and forward its ref', () => {
    const ref = createRef<SVGSVGElement>();
    const { container } = render(<CloseIcon ref={ref} className="consumer" />);
    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('aria-hidden')).toBe('true');
    expect(icon?.hasAttribute('role')).toBe(false);
    expect(icon?.getAttribute('stroke')).toBe('currentColor');
    expect(icon?.getAttribute('width')).toBe('16px');
    expect(icon?.getAttribute('data-icon')).toBe('CloseIcon');
    expect(icon?.classList.contains('consumer')).toBe(true);
    expect(icon?.classList.contains('faber-ui-icon')).toBe(true);
    expect(ref.current).toBe(icon);
  });

  it('SHOULD become a named image WHEN a label is provided', () => {
    const { getByRole } = render(<CloseIcon label="Closed" />);
    const icon = getByRole('img', { name: 'Closed' });

    expect(icon.hasAttribute('aria-hidden')).toBe(false);
  });

  it('SHOULD follow the surrounding font size WHEN the size is current', () => {
    const { container } = render(<CloseIcon size={ICON_SIZES.CURRENT} />);
    const icon = container.querySelector('svg');

    expect(icon?.getAttribute('width')).toBe('1em');
    expect(icon?.getAttribute('height')).toBe('1em');
  });

  it('SHOULD expose the approved icon set', () => {
    expect(Object.keys(icons).sort()).toEqual([
      'ArrowRightIcon',
      'ArrowUpRightIcon',
      'CheckIcon',
      'CloseIcon',
      'CopyIcon',
      'ICON_SIZES',
      'MonitorIcon',
      'MoonIcon',
      'PlusIcon',
      'SunIcon',
      'TrashIcon',
    ]);
  });
});
