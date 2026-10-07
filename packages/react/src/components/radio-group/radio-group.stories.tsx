import type { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from '../radio';
import { RadioGroup } from './radio-group.ui';

const meta = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {
  args: {
    label: 'Preferred material',
    description: 'Choose the material used for this object.',
    children: (
      <>
        <Radio label="Malachite" name="material" value="malachite" />
        <Radio label="Copper" name="material" value="copper" />
        <Radio label="Graphite" name="material" value="graphite" />
      </>
    ),
  },
};

export const ValidationError: TStory = {
  args: {
    ...Playground.args,
    error: 'Choose one material before continuing.',
  },
};
