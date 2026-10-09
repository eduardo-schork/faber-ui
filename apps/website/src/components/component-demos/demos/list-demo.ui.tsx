'use client';

import { Badge, List, LIST_MARKERS, ListItem } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function ListDemo() {
  return (
    <DemoStack>
      <List>
        <ListItem>Native elements first</ListItem>
        <ListItem>Typed options</ListItem>
      </List>
      <List ordered>
        <ListItem>Install the package.</ListItem>
        <ListItem>Import the stylesheet.</ListItem>
      </List>
      <List marker={LIST_MARKERS.NONE} gap="XS">
        <ListItem>
          <Badge>Draft</Badge> Without markers
        </ListItem>
      </List>
    </DemoStack>
  );
}

export const LIST_DEMO = {
  Demo: ListDemo,
  code: `import { List, ListItem } from '@faber-ui/react/list';

<List>
  <ListItem>Native elements first</ListItem>
</List>

<List ordered>
  <ListItem>Install the package.</ListItem>
</List>

<List marker="none" gap="XS">
  <ListItem>Without markers</ListItem>
</List>`,
} satisfies TComponentDemo;
