import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button';
import { DIALOG_PLACEMENTS, type TDialogPlacement } from './dialog.constants';
import { Dialog } from './dialog.ui';

const meta = {
  title: 'Components/Overlays/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  args: {
    children: 'The project and its deployments will be removed. This cannot be undone.',
    onClose: () => undefined,
    open: false,
    placement: DIALOG_PLACEMENTS.CENTER,
    title: 'Delete project',
  },
  argTypes: { placement: { control: 'select', options: Object.values(DIALOG_PLACEMENTS) } },
} satisfies Meta<typeof Dialog>;

export default meta;

type TStory = StoryObj<typeof meta>;

function DialogExample({ placement }: { placement: TDialogPlacement }) {
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
        Open dialog
      </Button>
      <Dialog
        open={open}
        placement={placement}
        title="Delete project"
        onClose={close}
        footer={
          <>
            <Button color="neutral" variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button color="accent" onClick={close}>
              Delete
            </Button>
          </>
        }
      >
        The project and its deployments will be removed. This cannot be undone.
      </Dialog>
    </>
  );
}

export const Playground: TStory = {
  render: ({ placement }) => <DialogExample placement={placement ?? DIALOG_PLACEMENTS.CENTER} />,
};

/** Rendered open, for visual review of the modal surface. */
export const Open: TStory = { args: { open: true } };
