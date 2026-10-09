import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../button';
import { DRAWER_SIDES, type TDrawerSide } from './drawer.constants';
import { Drawer } from './drawer.ui';

const meta = {
  title: 'Components/Overlays/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  args: {
    children: 'Filters and secondary navigation fit well in a drawer.',
    onClose: () => undefined,
    open: false,
    side: DRAWER_SIDES.END,
    title: 'Filters',
  },
  argTypes: { side: { control: 'select', options: Object.values(DRAWER_SIDES) } },
} satisfies Meta<typeof Drawer>;

export default meta;

type TStory = StoryObj<typeof meta>;

function DrawerExample({ side }: { side: TDrawerSide }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open drawer
      </Button>
      <Drawer
        open={open}
        side={side}
        title="Filters"
        onClose={() => {
          setOpen(false);
        }}
      >
        Filters and secondary navigation fit well in a drawer.
      </Drawer>
    </>
  );
}

export const Playground: TStory = {
  render: ({ side }) => <DrawerExample side={side ?? DRAWER_SIDES.END} />,
};

/** Rendered open, for visual review of the modal surface. */
export const Open: TStory = { args: { open: true } };
