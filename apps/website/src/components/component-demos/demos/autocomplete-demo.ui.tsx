'use client';

import { Autocomplete, Field } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function AutocompleteDemo() {
  return (
    <Field label="Region" description="Pick a suggestion or type another city.">
      <Autocomplete
        name="region"
        placeholder="Start typing"
        options={['Dublin', 'Frankfurt', 'Lisbon', 'São Paulo', 'Washington, D.C.']}
      />
    </Field>
  );
}

export const AUTOCOMPLETE_DEMO = {
  Demo: AutocompleteDemo,
  code: `import { Autocomplete, Field } from '@faber-ui/react';

<Field label="Region">
  <Autocomplete name="region" options={['Dublin', 'Frankfurt', 'Lisbon']} />
</Field>`,
} satisfies TComponentDemo;
