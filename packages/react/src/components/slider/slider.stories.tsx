import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '../field';
import { Slider } from './slider.ui';

const meta = {
  title: 'Components/Forms/Slider',
  component: Slider,
  args: { 'aria-label': 'Volume', defaultValue: 40, max: 100, min: 0, step: 1 },
} satisfies Meta<typeof Slider>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const WithField: TStory = {
  render: (args) => (
    <Field label="Volume" description="From quiet to loud.">
      <Slider {...args} aria-label={undefined} />
    </Field>
  ),
};

export const Disabled: TStory = { args: { disabled: true } };
