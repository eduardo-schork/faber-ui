'use client';

import { Button, BUTTON_COLORS, BUTTON_VARIANTS, Dialog } from '@faber-ui/react';
import { useState } from 'react';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function DialogDemo() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

  return (
    <DemoRow>
      <Button
        color={BUTTON_COLORS.ACCENT}
        variant={BUTTON_VARIANTS.OUTLINE}
        onClick={() => {
          setOpen(true);
        }}
      >
        Delete project
      </Button>
      <Dialog
        open={open}
        title="Delete project"
        onClose={close}
        footer={
          <>
            <Button color={BUTTON_COLORS.NEUTRAL} variant={BUTTON_VARIANTS.OUTLINE} onClick={close}>
              Cancel
            </Button>
            <Button color={BUTTON_COLORS.ACCENT} onClick={close}>
              Delete
            </Button>
          </>
        }
      >
        The project and its deployments will be removed. This cannot be undone.
      </Dialog>
    </DemoRow>
  );
}

export const DIALOG_DEMO = {
  Demo: DialogDemo,
  code: `import { Button, Dialog } from '@faber-ui/react';

<Dialog
  open={open}
  title="Delete project"
  onClose={() => setOpen(false)}
  footer={
    <>
      <Button color="neutral" variant="outline" onClick={close}>Cancel</Button>
      <Button color="accent" onClick={remove}>Delete</Button>
    </>
  }
>
  The project and its deployments will be removed.
</Dialog>`,
} satisfies TComponentDemo;
