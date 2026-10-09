import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { Field } from '../field';
import type { TComboboxSingleProps } from './combobox.types';
import { Combobox } from './combobox.ui';

// The props are a union of the single and multiple forms; the controls document the single one.
const SingleCombobox = Combobox as ComponentType<TComboboxSingleProps>;

const REGIONS = [
  { value: 'fra', label: 'Frankfurt' },
  { value: 'dub', label: 'Dublin' },
  { value: 'lhr', label: 'London' },
  { value: 'gru', label: 'São Paulo' },
  { value: 'iad', label: 'Virginia' },
  { value: 'sin', label: 'Singapore', disabled: true },
] as const;

const meta = {
  title: 'Components/Forms/Combobox',
  component: SingleCombobox,
  args: {
    'aria-label': 'Region',
    options: REGIONS,
    placeholder: 'Search a region',
  },
  decorators: [(Story) => <div style={{ width: 320, minHeight: 280 }}>{Story()}</div>],
} satisfies Meta<typeof SingleCombobox>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Selected: TStory = {
  args: { defaultValue: 'dub' },
};

export const Multiple: TStory = {
  render: () => (
    <Combobox
      multiple
      aria-label="Regions"
      options={REGIONS}
      defaultValue={['fra', 'gru']}
      placeholder="Add a region"
    />
  ),
};

export const InField: TStory = {
  render: () => (
    <Field label="Region" description="Where the workspace data is stored.">
      <Combobox options={REGIONS} placeholder="Search a region" />
    </Field>
  ),
};
