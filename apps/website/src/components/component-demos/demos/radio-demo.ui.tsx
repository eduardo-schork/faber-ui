'use client';

import { Radio } from '@faber-ui/react';
import { DemoFieldset } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function RadioDemo() {
  return (
    <DemoFieldset>
      <legend>Density</legend>
      <Radio label="Comfortable" name="demo-density" value="comfortable" defaultChecked />
      <Radio label="Compact" name="demo-density" value="compact" />
      <Radio
        label="Custom"
        name="demo-density"
        value="custom"
        description="Set spacing per view."
      />
    </DemoFieldset>
  );
}

export const RADIO_DEMO = {
  Demo: RadioDemo,
  code: `import { Radio } from '@faber-ui/react/radio';

<fieldset>
  <legend>Density</legend>
  <Radio label="Comfortable" name="density" value="comfortable" defaultChecked />
  <Radio label="Compact" name="density" value="compact" />
</fieldset>`,
} satisfies TComponentDemo;
