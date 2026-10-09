'use client';

import { Field, Textarea } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function TextareaDemo() {
  return (
    <Field label="Release notes" description="Drag the corner to resize vertically.">
      <Textarea name="notes" rows={4} placeholder="What changed in this version?" />
    </Field>
  );
}

export const TEXTAREA_DEMO = {
  Demo: TextareaDemo,
  code: `import { Field, Textarea } from '@faber-ui/react';

<Field label="Release notes">
  <Textarea name="notes" rows={4} />
</Field>`,
} satisfies TComponentDemo;
