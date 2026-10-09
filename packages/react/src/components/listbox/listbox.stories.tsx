import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '../field';
import { Listbox, ListboxGroup, ListboxOption, ListboxSeparator } from './listbox.ui';

const meta = {
  title: 'Components/Forms/Listbox',
  component: Listbox,
  args: {
    'aria-label': 'Role',
    placeholder: 'Choose a role',
    children: (
      <>
        <ListboxOption value="viewer">Viewer</ListboxOption>
        <ListboxOption value="editor">Editor</ListboxOption>
        <ListboxOption value="admin">Admin</ListboxOption>
      </>
    ),
  },
  decorators: [(Story) => <div style={{ width: 280, minHeight: 220 }}>{Story()}</div>],
} satisfies Meta<typeof Listbox>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Selected: TStory = {
  args: { defaultValue: 'editor' },
};

export const Disabled: TStory = {
  args: { defaultValue: 'editor', disabled: true },
};

export const Grouped: TStory = {
  render: () => (
    <Listbox aria-label="Region" defaultValue="fra">
      <ListboxGroup label="Europe">
        <ListboxOption value="fra">Frankfurt</ListboxOption>
        <ListboxOption value="lhr">London</ListboxOption>
      </ListboxGroup>
      <ListboxSeparator />
      <ListboxGroup label="Americas">
        <ListboxOption value="gru">São Paulo</ListboxOption>
        <ListboxOption value="iad" disabled>
          Virginia
        </ListboxOption>
      </ListboxGroup>
    </Listbox>
  ),
};

export const InField: TStory = {
  render: () => (
    <Field label="Role" description="Decides what they can change." error="Choose a role.">
      <Listbox placeholder="Choose a role">
        <ListboxOption value="viewer">Viewer</ListboxOption>
        <ListboxOption value="editor">Editor</ListboxOption>
      </Listbox>
    </Field>
  ),
};
