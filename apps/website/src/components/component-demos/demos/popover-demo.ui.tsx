'use client';

import { Button, BUTTON_VARIANTS, Popover, Switch, Text } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function PopoverDemo() {
  return (
    <Popover
      label="Share settings"
      content={
        <DemoStack>
          <Text.Strong>Share this project</Text.Strong>
          <Switch label="Anyone with the link can view" name="demo-share" defaultChecked />
        </DemoStack>
      }
    >
      <Button variant={BUTTON_VARIANTS.OUTLINE}>Share</Button>
    </Popover>
  );
}

export const POPOVER_DEMO = {
  Demo: PopoverDemo,
  code: `import { Button, Popover } from '@faber-ui/react';

<Popover label="Share settings" content={<ShareForm />}>
  <Button variant="outline">Share</Button>
</Popover>`,
} satisfies TComponentDemo;
