import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '../field';
import { DatePicker } from './date-picker.ui';

const meta = {
  title: 'Components/Forms/DatePicker',
  component: DatePicker,
  args: {
    'aria-label': 'Start date',
    locale: 'en-US',
  },
  decorators: [(Story) => <div style={{ width: 280, minHeight: 360 }}>{Story()}</div>],
} satisfies Meta<typeof DatePicker>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Selected: TStory = {
  args: { defaultValue: '2026-03-15' },
};

export const LimitedRange: TStory = {
  args: { defaultValue: '2026-03-15', min: '2026-03-10', max: '2026-03-24' },
};

export const InField: TStory = {
  render: (args) => (
    <Field label="Start date" description="The first day of the billing period.">
      <DatePicker {...args} aria-label={undefined} />
    </Field>
  ),
};
