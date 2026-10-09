'use client';

import { Button, BUTTON_VARIANTS, Checkbox, Drawer, Field, Select } from '@faber-ui/react';
import { useState } from 'react';
import { DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function DrawerDemo() {
  const [open, setOpen] = useState(false);

  return (
    <DemoRow>
      <Button
        variant={BUTTON_VARIANTS.OUTLINE}
        onClick={() => {
          setOpen(true);
        }}
      >
        Open filters
      </Button>
      <Drawer
        open={open}
        title="Filters"
        onClose={() => {
          setOpen(false);
        }}
      >
        <DemoStack>
          <Checkbox label="Only my projects" name="drawer-mine" defaultChecked />
          <Checkbox label="Include archived" name="drawer-archived" />
          <Field label="Region">
            <Select name="drawer-region" defaultValue="all">
              <option value="all">All regions</option>
              <option value="fra">Frankfurt</option>
            </Select>
          </Field>
        </DemoStack>
      </Drawer>
    </DemoRow>
  );
}

export const DRAWER_DEMO = {
  Demo: DrawerDemo,
  code: `import { Drawer } from '@faber-ui/react/drawer';

<Drawer open={open} title="Filters" side="end" onClose={() => setOpen(false)}>
  <FilterForm />
</Drawer>`,
} satisfies TComponentDemo;
