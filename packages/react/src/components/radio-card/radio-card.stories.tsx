import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLORS } from '@faber-ui/tokens';

import { ColorSwatch } from '../color-swatch';
import { Grid } from '../grid';
import { RadioGroup } from '../radio-group';
import { RadioCard } from './radio-card.ui';

const meta = {
  title: 'Molecules/RadioCard',
  component: RadioCard,
  args: {
    name: 'plan',
    value: 'team',
    label: 'Team',
    description: 'Up to 12 seats, billed monthly.',
  },
} satisfies Meta<typeof RadioCard>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Group: TStory = {
  render: () => (
    <RadioGroup label="Plan">
      <Grid columns={{ MOBILE: 1, TABLET: 3 }} gap="SM">
        <RadioCard name="story-plan" value="solo" label="Solo" description="One seat" />
        <RadioCard
          name="story-plan"
          value="team"
          label="Team"
          description="Up to 12 seats"
          defaultChecked
        />
        <RadioCard
          name="story-plan"
          value="company"
          label="Company"
          description="Contact sales"
          disabled
        />
      </Grid>
    </RadioGroup>
  ),
};

export const WithMedia: TStory = {
  render: () => (
    <RadioGroup label="Accent">
      <Grid columns={{ MOBILE: 1, TABLET: 2 }} gap="SM">
        <RadioCard
          name="story-accent"
          value="primary"
          label="Primary"
          media={<ColorSwatch color={COLORS.PRIMARY} />}
          defaultChecked
        />
        <RadioCard
          name="story-accent"
          value="accent"
          label="Accent"
          media={<ColorSwatch color={COLORS.ACCENT} />}
        />
      </Grid>
    </RadioGroup>
  ),
};
