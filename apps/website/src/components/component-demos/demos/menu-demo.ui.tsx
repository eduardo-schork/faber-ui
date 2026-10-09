'use client';

import {
  Button,
  BUTTON_VARIANTS,
  Menu,
  MENU_ITEM_COLORS,
  MenuItem,
  MenuLabel,
  MenuSeparator,
} from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function MenuDemo() {
  const [lastAction, setLastAction] = useState('nothing yet');

  return (
    <DemoStack>
      <DemoRow>
        <Menu trigger={<Button variant={BUTTON_VARIANTS.OUTLINE}>Options</Button>}>
          <MenuLabel>Project</MenuLabel>
          {['Rename', 'Duplicate'].map((action) => (
            <MenuItem
              key={action}
              onSelect={() => {
                setLastAction(action);
              }}
            >
              {action}
            </MenuItem>
          ))}
          <MenuItem disabled>Transfer</MenuItem>
          <MenuSeparator />
          <MenuItem
            color={MENU_ITEM_COLORS.ERROR}
            onSelect={() => {
              setLastAction('Delete');
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </DemoRow>
      <DemoNote role="status">Last action: {lastAction}.</DemoNote>
    </DemoStack>
  );
}

export const MENU_DEMO = {
  Demo: MenuDemo,
  code: `import { Button, Menu, MenuItem, MenuLabel, MenuSeparator } from '@faber-ui/react';

<Menu trigger={<Button variant="outline">Options</Button>}>
  <MenuLabel>Project</MenuLabel>
  <MenuItem onSelect={rename}>Rename</MenuItem>
  <MenuItem disabled>Transfer</MenuItem>
  <MenuSeparator />
  <MenuItem color="error" onSelect={remove}>
    Delete
  </MenuItem>
</Menu>`,
} satisfies TComponentDemo;
