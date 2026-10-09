'use client';

import { Pagination } from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function PaginationDemo() {
  const [page, setPage] = useState(6);

  return (
    <DemoStack>
      <Pagination count={20} page={page} onPageChange={setPage} />
      <DemoNote role="status">Page {page} of 20.</DemoNote>
    </DemoStack>
  );
}

export const PAGINATION_DEMO = {
  Demo: PaginationDemo,
  code: `import { Pagination } from '@faber-ui/react/pagination';

const [page, setPage] = useState(6);

<Pagination count={20} page={page} onPageChange={setPage} />

// Every label can be translated.
<Pagination
  aria-label="Paginação"
  count={20}
  page={page}
  onPageChange={setPage}
  nextLabel="Próxima página"
/>`,
} satisfies TComponentDemo;
