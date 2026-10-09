import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from '../field';
import { FileUpload } from './file-upload.ui';

const meta = {
  title: 'Components/Forms/FileUpload',
  component: FileUpload,
  args: {
    name: 'attachments',
    description: 'PDF or PNG, up to 10 MB each.',
    multiple: true,
  },
  decorators: [(Story) => <div style={{ maxWidth: 420 }}>{Story()}</div>],
} satisfies Meta<typeof FileUpload>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const SingleFile: TStory = {
  args: { multiple: false, label: 'Choose a file or drop it here' },
};

export const Disabled: TStory = {
  args: { disabled: true },
};

export const InField: TStory = {
  render: (args) => (
    <Field label="Attachments" error="Add at least one file.">
      <FileUpload {...args} />
    </Field>
  ),
};
