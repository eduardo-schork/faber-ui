'use client';

import { Card, Grid, STAT_TRENDS, Stat } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function StatDemo() {
  return (
    <Grid columns={{ MOBILE: 1, MOBILE_LARGE: 2 }} gap="SM">
      <Card>
        <Stat
          label="Revenue"
          value="$48,200"
          change="+12%"
          trend={STAT_TRENDS.POSITIVE}
          helper="Last 30 days"
        />
      </Card>
      <Card>
        <Stat
          label="Churn"
          value="2.4%"
          change="+0.6 pt"
          trend={STAT_TRENDS.NEGATIVE}
          helper="Last 30 days"
        />
      </Card>
    </Grid>
  );
}

export const STAT_DEMO = {
  Demo: StatDemo,
  code: `import { Stat } from '@faber-ui/react/stat';

<Stat label="Revenue" value="$48,200" change="+12%" trend="positive" helper="Last 30 days" />
<Stat label="Churn" value="2.4%" change="+0.6 pt" trend="negative" />`,
} satisfies TComponentDemo;
