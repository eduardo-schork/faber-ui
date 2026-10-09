'use client';

import { Grid, RadioCard, RadioGroup } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function RadioCardDemo() {
  return (
    <RadioGroup label="Plan">
      <Grid columns={{ MOBILE: 1, MOBILE_LARGE: 2 }} gap="SM">
        <RadioCard name="demo-plan" value="solo" label="Solo" description="One seat" />
        <RadioCard
          name="demo-plan"
          value="team"
          label="Team"
          description="Up to 12 seats"
          defaultChecked
        />
      </Grid>
    </RadioGroup>
  );
}

export const RADIO_CARD_DEMO = {
  Demo: RadioCardDemo,
  code: `import { Grid, RadioCard, RadioGroup } from '@faber-ui/react';

<RadioGroup label="Plan">
  <Grid columns={2} gap="SM">
    <RadioCard name="plan" value="solo" label="Solo" description="One seat" />
    <RadioCard name="plan" value="team" label="Team" description="Up to 12 seats" />
  </Grid>
</RadioGroup>`,
} satisfies TComponentDemo;
