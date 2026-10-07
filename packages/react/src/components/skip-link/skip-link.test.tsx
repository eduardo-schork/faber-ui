import { cleanup, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { SkipLink } from './skip-link.ui';

describe('SkipLink', () => {
  afterEach(cleanup);

  it('SHOULD link to the main region by default and forward its ref', () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByRole } = render(<SkipLink ref={ref} />);
    const link = getByRole('link', { name: 'Skip to content' });

    expect(link.getAttribute('href')).toBe('#main');
    expect(link.classList.contains('faber-ui-skip-link')).toBe(true);
    expect(ref.current).toBe(link);
  });

  it('SHOULD accept another target and a translated label', () => {
    const { getByRole } = render(<SkipLink href="#conteudo">Pular para o conteúdo</SkipLink>);

    expect(getByRole('link', { name: 'Pular para o conteúdo' }).getAttribute('href')).toBe(
      '#conteudo',
    );
  });
});
