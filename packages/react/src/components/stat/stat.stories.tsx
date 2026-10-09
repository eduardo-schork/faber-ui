import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../card';
import { Grid } from '../grid';
import { STAT_TRENDS } from './stat.constants';
import { Stat } from './stat.ui';

const meta = {
  title: 'Components/Display/Stat',
  component: Stat,
  args: {
    label: 'Revenue',
    value: '$48,200',
    change: '+12%',
    trend: STAT_TRENDS.POSITIVE,
    helper: 'Last 30 days',
  },
} satisfies Meta<typeof Stat>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Dashboard: TStory = {
  render: () => (
    <Grid columns={{ MOBILE: 1, TABLET: 3 }} gap="MD">
      <Card>
        <Stat label="Revenue" value="$48,200" change="+12%" trend={STAT_TRENDS.POSITIVE} />
      </Card>
      <Card>
        <Stat label="Churn" value="2.4%" change="+0.6 pt" trend={STAT_TRENDS.NEGATIVE} />
      </Card>
      <Card>
        <Stat label="Seats" value="128" helper="Across 14 workspaces" />
      </Card>
    </Grid>
  ),
};
