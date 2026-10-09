'use client';

import {
  AlertDialog,
  Button,
  BUTTON_COLORS,
  BUTTON_VARIANTS,
  TOAST_COLORS,
  useToast,
} from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function AlertDialogDemo() {
  const [open, setOpen] = useState(false);
  const [outcome, setOutcome] = useState('nothing yet');
  const { toast } = useToast();

  return (
    <DemoStack>
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
      </DemoRow>
      <DemoNote role="status">Last decision: {outcome}.</DemoNote>
      <AlertDialog
        open={open}
        destructive
        title="Delete this project?"
        confirmLabel="Delete"
        onCancel={() => {
          setOpen(false);
          setOutcome('cancelled');
        }}
        onConfirm={() => {
          setOpen(false);
          setOutcome('confirmed');
          toast({ title: 'Project deleted', color: TOAST_COLORS.ACCENT });
        }}
      >
        The project and its deployments will be removed. This cannot be undone.
      </AlertDialog>
    </DemoStack>
  );
}

export const ALERT_DIALOG_DEMO = {
  Demo: AlertDialogDemo,
  code: `import { AlertDialog, useToast } from '@faber-ui/react';

const { toast } = useToast();

<AlertDialog
  open={open}
  destructive
  title="Delete this project?"
  confirmLabel="Delete"
  onCancel={() => setOpen(false)}
  onConfirm={() => {
    setOpen(false);
    toast({ title: 'Project deleted', color: 'accent' });
  }}
>
  The project and its deployments will be removed. This cannot be undone.
</AlertDialog>`,
} satisfies TComponentDemo;
