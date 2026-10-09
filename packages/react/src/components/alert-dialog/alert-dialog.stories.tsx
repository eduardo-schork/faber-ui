import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button';
import { AlertDialog } from './alert-dialog.ui';

const meta = {
  title: 'Components/Overlays/AlertDialog',
  component: AlertDialog,
  parameters: { layout: 'centered' },
  args: {
    children: 'The project and its deployments will be removed. This cannot be undone.',
    confirmLabel: 'Delete',
    destructive: true,
    onCancel: () => undefined,
    onConfirm: () => undefined,
    open: false,
    title: 'Delete this project?',
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    const close = () => {
      setOpen(false);
    };

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Delete project
        </Button>
        <AlertDialog {...args} open={open} onCancel={close} onConfirm={close} />
      </>
    );
  },
};
