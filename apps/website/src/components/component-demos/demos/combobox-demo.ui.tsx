'use client';

import { Combobox, Field } from '@faber-ui/react';
import { useState } from 'react';

import { DemoStack } from '../component-demos.styles';
import type { TComponentDemo } from '../component-demo.types';

const REGIONS = [
  { value: 'fra', label: 'Frankfurt' },
  { value: 'dub', label: 'Dublin' },
  { value: 'lhr', label: 'London' },
  { value: 'gru', label: 'São Paulo' },
  { value: 'iad', label: 'Virginia' },
  { value: 'sin', label: 'Singapore', disabled: true },
] as const;

function ComboboxDemo() {
  const [region, setRegion] = useState('fra');
  const [replicas, setReplicas] = useState<string[]>(['dub', 'gru']);

  return (
    <DemoStack>
      <Field label="Region" description={`Selected value: ${region}`}>
        <Combobox
          name="combobox-region"
          options={REGIONS}
          placeholder="Search a region"
          value={region}
          onValueChange={setRegion}
        />
      </Field>
      <Field label="Replicas" description={`${String(replicas.length)} selected`}>
        <Combobox
          multiple
          name="combobox-replicas"
          options={REGIONS}
          placeholder="Add a region"
          value={replicas}
          onValueChange={setReplicas}
        />
      </Field>
    </DemoStack>
  );
}

export const COMBOBOX_DEMO = {
  Demo: ComboboxDemo,
  code: `import { Combobox, Field } from '@faber-ui/react';

const REGIONS = [
  { value: 'fra', label: 'Frankfurt' },
  { value: 'dub', label: 'Dublin' },
];

<Field label="Region">
  <Combobox name="region" options={REGIONS} value={region} onValueChange={setRegion} />
</Field>

<Field label="Replicas">
  <Combobox multiple options={REGIONS} value={replicas} onValueChange={setReplicas} />
</Field>`,
} satisfies TComponentDemo;
