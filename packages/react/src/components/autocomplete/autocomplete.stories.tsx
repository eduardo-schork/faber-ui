import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '../field';
import { Autocomplete } from './autocomplete.ui';

const meta = {
  title: 'Atoms/Autocomplete',
  component: Autocomplete,
  args: {
    options: ['Frankfurt', 'Dublin', 'Lisbon', 'São Paulo', 'Washington, D.C.'],
    placeholder: 'Start typing a city',
  },
  render: (args) => (
    <Field label="Region">
      <Autocomplete {...args} />
    </Field>
  ),
} satisfies Meta<typeof Autocomplete>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
