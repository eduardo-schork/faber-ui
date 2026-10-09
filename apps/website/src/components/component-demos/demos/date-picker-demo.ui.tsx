'use client';

import { DatePicker, Field } from '@faber-ui/react';
import { useState } from 'react';

import type { TComponentDemo } from '../component-demo.types';

function DatePickerDemo() {
  const [start, setStart] = useState('2026-03-15');

  return (
    <Field label="Start date" description={`Submitted as ${start}`}>
      <DatePicker
        name="date-picker-start"
        locale="en-US"
        min="2026-03-01"
        value={start}
        onValueChange={setStart}
      />
    </Field>
  );
}

export const DATE_PICKER_DEMO = {
  Demo: DatePickerDemo,
  code: `import { DatePicker, Field } from '@faber-ui/react';

<Field label="Start date">
  <DatePicker name="start" min="2026-03-01" value={start} onValueChange={setStart} />
</Field>`,
} satisfies TComponentDemo;
