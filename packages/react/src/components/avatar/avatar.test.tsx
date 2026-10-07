import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { AVATAR_SIZES } from './avatar.constants';
import { Avatar } from './avatar.ui';

describe('Avatar', () => {
  afterEach(cleanup);

  it('SHOULD render an accessible image and forward the root ref', () => {
    const ref = createRef<HTMLSpanElement>();
    const { getByRole } = render(
      <Avatar ref={ref} alt="Ada Lovelace" fallback="AL" src="/ada.png" />,
    );
    const image = getByRole('img', { name: 'Ada Lovelace' });

    expect(image.getAttribute('src')).toBe('/ada.png');
    expect(ref.current?.tagName).toBe('SPAN');
    expect(ref.current?.getAttribute('data-size')).toBe(AVATAR_SIZES.MEDIUM);
  });

  it('SHOULD replace a failed image with an accessible fallback', () => {
    const onImageError = vi.fn();
    const { getByRole, getByText } = render(
      <Avatar alt="Ada Lovelace" fallback="AL" src="/missing.png" onImageError={onImageError} />,
    );

    fireEvent.error(getByRole('img', { name: 'Ada Lovelace' }));

    expect(getByText('AL').getAttribute('role')).toBe('img');
    expect(getByRole('img', { name: 'Ada Lovelace' }).textContent).toBe('AL');
    expect(onImageError).toHaveBeenCalledOnce();
  });

  it('SHOULD show the fallback WHEN the image had already failed before mounting', () => {
    const complete = vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(true);
    const { getByRole, queryByAltText } = render(
      <Avatar alt="Alan Turing" fallback="AT" src="/broken.png" />,
    );

    expect(queryByAltText('Alan Turing')).toBeNull();
    expect(getByRole('img', { name: 'Alan Turing' }).textContent).toBe('AT');

    complete.mockRestore();
  });

  it('SHOULD hide an empty-alt fallback from assistive technology', () => {
    const { getByTestId } = render(<Avatar alt="" fallback="AL" data-testid="avatar" />);

    expect(getByTestId('avatar').getAttribute('aria-hidden')).toBe('true');
  });
});
