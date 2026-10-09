'use client';

import { Field, Input, INPUT_TYPES } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function InputDemo() {
  return (
    <DemoStack>
      <Field label="Email" description="Used for account notices only.">
        <Input
          name="email"
          type={INPUT_TYPES.EMAIL}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>
      <Field label="Search">
        <Input name="query" type={INPUT_TYPES.SEARCH} placeholder="Find a component" />
      </Field>
      <Field label="API key">
        <Input name="key" defaultValue="fb_live_3f9a" disabled />
      </Field>
    </DemoStack>
  );
}

export const INPUT_DEMO = {
  Demo: InputDemo,
  code: `import { Field, Input, INPUT_TYPES } from '@faber-ui/react';

<Field label="Email" description="Used for account notices only.">
  <Input name="email" type={INPUT_TYPES.EMAIL} autoComplete="email" />
</Field>

<Field label="API key">
  <Input name="key" defaultValue="fb_live_3f9a" disabled />
</Field>`,
} satisfies TComponentDemo;
