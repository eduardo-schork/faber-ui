'use client';

import { Field, Input, INPUT_TYPES } from '@faber-ui/react';
import { useState } from 'react';

import type { TComponentDemo } from '../component-demo.types';

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/u;

function FieldDemo() {
  const [email, setEmail] = useState('ada@example');
  const isValid = EMAIL_PATTERN.test(email);

  return (
    <Field
      label="Work email"
      description="Edit the value to see the error connect and clear."
      error={isValid ? undefined : 'Enter an address like name@company.com.'}
    >
      <Input
        name="work-email"
        type={INPUT_TYPES.EMAIL}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
    </Field>
  );
}

export const FIELD_DEMO = {
  Demo: FieldDemo,
  code: `import { Field, Input } from '@faber-ui/react';

// Field adds htmlFor, aria-describedby, and aria-invalid.
// Validation stays in your code or your form library.
<Field label="Work email" error={errors.email?.message}>
  <Input type="email" {...register('email')} />
</Field>`,
} satisfies TComponentDemo;
