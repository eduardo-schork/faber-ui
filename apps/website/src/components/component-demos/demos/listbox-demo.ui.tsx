'use client';

import { Field, Listbox, ListboxGroup, ListboxOption, ListboxSeparator } from '@faber-ui/react';
import { useState } from 'react';

import type { TComponentDemo } from '../component-demo.types';

function ListboxDemo() {
  const [region, setRegion] = useState('fra');

  return (
    <Field label="Region" description={`Selected value: ${region}`}>
      <Listbox name="listbox-region" value={region} onValueChange={setRegion}>
        <ListboxGroup label="Europe">
          <ListboxOption value="fra">Frankfurt</ListboxOption>
          <ListboxOption value="dub">Dublin</ListboxOption>
        </ListboxGroup>
        <ListboxSeparator />
        <ListboxGroup label="Americas">
          <ListboxOption value="gru">São Paulo</ListboxOption>
          <ListboxOption value="iad" disabled>
            Washington, D.C.
          </ListboxOption>
        </ListboxGroup>
      </Listbox>
    </Field>
  );
}

export const LISTBOX_DEMO = {
  Demo: ListboxDemo,
  code: `import { Field, Listbox, ListboxGroup, ListboxOption } from '@faber-ui/react';

<Field label="Region">
  <Listbox name="region" value={region} onValueChange={setRegion}>
    <ListboxGroup label="Europe">
      <ListboxOption value="fra">Frankfurt</ListboxOption>
      <ListboxOption value="dub">Dublin</ListboxOption>
    </ListboxGroup>
  </Listbox>
</Field>`,
} satisfies TComponentDemo;
