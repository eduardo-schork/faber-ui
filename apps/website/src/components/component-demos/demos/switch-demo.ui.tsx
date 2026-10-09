'use client';

import { Switch } from '@faber-ui/react';
import { useState } from 'react';
import { DemoNote, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function SwitchDemo() {
  const [enabled, setEnabled] = useState(true);

  return (
    <DemoStack>
      <Switch
        label="Deploy previews"
        name="previews"
        description="Build a preview for every pull request."
        checked={enabled}
        onChange={(event) => {
          setEnabled(event.target.checked);
        }}
      />
      <Switch label="Single sign-on" name="demo-sso" disabled />
      <DemoNote role="status">Previews are {enabled ? 'on' : 'off'}.</DemoNote>
    </DemoStack>
  );
}

export const SWITCH_DEMO = {
  Demo: SwitchDemo,
  code: `import { Switch } from '@faber-ui/react/switch';

<Switch
  label="Deploy previews"
  description="Build a preview for every pull request."
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`,
} satisfies TComponentDemo;
