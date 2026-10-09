'use client';

import { Checkbox } from '@faber-ui/react';
import { useState } from 'react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function CheckboxDemo() {
  const [accepted, setAccepted] = useState(false);

  return (
    <DemoStack>
      <Checkbox label="Send me product updates" name="updates" defaultChecked />
      <Checkbox
        label="Share anonymous usage data"
        name="usage"
        description="Helps prioritize which components to build next."
      />
      <Checkbox
        label="I accept the terms"
        name="terms"
        checked={accepted}
        error={accepted ? undefined : 'Accept the terms to continue.'}
        onChange={(event) => {
          setAccepted(event.target.checked);
        }}
      />
      <Checkbox label="Unavailable on this plan" name="sso" disabled />
    </DemoStack>
  );
}

export const CHECKBOX_DEMO = {
  Demo: CheckboxDemo,
  code: `import { Checkbox } from '@faber-ui/react/checkbox';

<Checkbox label="Send me product updates" name="updates" defaultChecked />

<Checkbox
  label="I accept the terms"
  checked={accepted}
  error={accepted ? undefined : 'Accept the terms to continue.'}
  onChange={(event) => setAccepted(event.target.checked)}
/>`,
} satisfies TComponentDemo;
