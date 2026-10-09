'use client';

import { Radio, RadioGroup } from '@faber-ui/react';
import { useState } from 'react';

import type { TComponentDemo } from '../component-demo.types';

function RadioGroupDemo() {
  const [plan, setPlan] = useState<string | null>(null);

  return (
    <RadioGroup
      label="Plan"
      description="You can change this at any time."
      error={plan === null ? 'Choose a plan to continue.' : undefined}
    >
      {['Starter', 'Team', 'Enterprise'].map((option) => (
        <Radio
          key={option}
          label={option}
          name="demo-plan"
          value={option}
          checked={plan === option}
          onChange={() => {
            setPlan(option);
          }}
        />
      ))}
    </RadioGroup>
  );
}

export const RADIO_GROUP_DEMO = {
  Demo: RadioGroupDemo,
  code: `import { Radio, RadioGroup } from '@faber-ui/react';

<RadioGroup label="Plan" error={errors.plan?.message}>
  <Radio label="Starter" value="starter" {...register('plan')} />
  <Radio label="Team" value="team" {...register('plan')} />
</RadioGroup>`,
} satisfies TComponentDemo;
