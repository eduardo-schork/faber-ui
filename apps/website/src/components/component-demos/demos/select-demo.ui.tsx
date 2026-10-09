'use client';

import { Field, Select } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function SelectDemo() {
  return (
    <Field label="Region" description="Where the workspace data is stored.">
      <Select name="region" defaultValue="fra">
        <optgroup label="Europe">
          <option value="fra">Frankfurt</option>
          <option value="dub">Dublin</option>
        </optgroup>
        <optgroup label="Americas">
          <option value="gru">São Paulo</option>
          <option value="iad">Washington, D.C.</option>
        </optgroup>
      </Select>
    </Field>
  );
}

export const SELECT_DEMO = {
  Demo: SelectDemo,
  code: `import { Field, Select } from '@faber-ui/react';

<Field label="Region">
  <Select name="region" defaultValue="fra">
    <optgroup label="Europe">
      <option value="fra">Frankfurt</option>
      <option value="dub">Dublin</option>
    </optgroup>
  </Select>
</Field>`,
} satisfies TComponentDemo;
