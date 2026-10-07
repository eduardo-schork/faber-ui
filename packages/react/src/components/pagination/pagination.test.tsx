import { cleanup, fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Pagination } from './pagination.ui';

describe('Pagination', () => {
  afterEach(cleanup);

  it('SHOULD render a named navigation landmark, mark the current page, and forward its ref', () => {
    const ref = createRef<HTMLElement>();
    const { getByRole } = render(
      <Pagination ref={ref} count={5} page={2} onPageChange={vi.fn()} />,
    );

    expect(getByRole('navigation', { name: 'Pagination' })).toBe(ref.current);
    expect(getByRole('button', { name: 'Page 2' }).getAttribute('aria-current')).toBe('page');
    expect(getByRole('button', { name: 'Page 3' }).hasAttribute('aria-current')).toBe(false);
  });

  it('SHOULD request the chosen, previous, and next pages', () => {
    const handlePageChange = vi.fn();
    const { getByRole } = render(<Pagination count={5} page={2} onPageChange={handlePageChange} />);

    fireEvent.click(getByRole('button', { name: 'Page 4' }));
    fireEvent.click(getByRole('button', { name: 'Previous page' }));
    fireEvent.click(getByRole('button', { name: 'Next page' }));

    expect(handlePageChange.mock.calls).toEqual([[4], [1], [3]]);
  });

  it('SHOULD disable the edge controls WHEN on the first or last page', () => {
    const { getByRole, rerender } = render(
      <Pagination count={3} page={1} onPageChange={vi.fn()} />,
    );

    expect((getByRole('button', { name: 'Previous page' }) as HTMLButtonElement).disabled).toBe(
      true,
    );

    rerender(<Pagination count={3} page={3} onPageChange={vi.fn()} />);

    expect((getByRole('button', { name: 'Next page' }) as HTMLButtonElement).disabled).toBe(true);
  });

  it('SHOULD accept translated labels', () => {
    const { getByRole } = render(
      <Pagination
        aria-label="Paginação"
        count={2}
        page={1}
        onPageChange={vi.fn()}
        getPageLabel={(page) => `Página ${String(page)}`}
        nextLabel="Próxima página"
        previousLabel="Página anterior"
      />,
    );

    expect(getByRole('navigation', { name: 'Paginação' })).toBeDefined();
    expect(getByRole('button', { name: 'Página 2' })).toBeDefined();
    expect(getByRole('button', { name: 'Próxima página' })).toBeDefined();
  });
});
