import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Pagination } from './pagination.ui';

const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  args: { count: 20, onPageChange: () => undefined, page: 1, siblingCount: 1 },
} satisfies Meta<typeof Pagination>;

export default meta;

type TStory = StoryObj<typeof meta>;

function ControlledPagination({ count, siblingCount }: { count: number; siblingCount?: number }) {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      count={count}
      page={page}
      onPageChange={setPage}
      {...(siblingCount === undefined ? {} : { siblingCount })}
    />
  );
}

export const Playground: TStory = {
  render: ({ count, siblingCount }) => (
    <ControlledPagination count={count} {...(siblingCount === undefined ? {} : { siblingCount })} />
  ),
};
