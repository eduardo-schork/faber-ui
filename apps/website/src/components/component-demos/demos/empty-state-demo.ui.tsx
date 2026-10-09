'use client';

import { PlusIcon } from '@faber-ui/icons';
import { BUTTON_VARIANTS, Button, EmptyState } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function EmptyStateDemo() {
  return (
    <EmptyState
      media={<PlusIcon />}
      title="No invoices yet"
      description="Invoices appear here after the first payment."
      actions={
        <>
          <Button>Create invoice</Button>
          <Button variant={BUTTON_VARIANTS.OUTLINE}>Import</Button>
        </>
      }
    />
  );
}

export const EMPTY_STATE_DEMO = {
  Demo: EmptyStateDemo,
  code: `import { Button, EmptyState } from '@faber-ui/react';

<EmptyState
  media={<PlusIcon />}
  title="No invoices yet"
  description="Invoices appear here after the first payment."
  actions={<Button>Create invoice</Button>}
/>`,
} satisfies TComponentDemo;
