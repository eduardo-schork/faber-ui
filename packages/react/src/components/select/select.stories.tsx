import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { Field } from '../field';
import { Select } from './select.ui';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {
  args: {
    'aria-label': 'Material',
    children: (
      <>
        <option value="malachite">Malachite</option>
        <option value="copper">Copper</option>
        <option value="graphite">Graphite</option>
      </>
    ),
  },
};

export const WithField: TStory = {
  render: () => (
    <div style={{ width: '320px', maxWidth: `calc(100vw - ${SPACINGS.XL})` }}>
      <Field label="Material" description="Choose the primary material.">
        <Select defaultValue="malachite">
          <option value="malachite">Malachite</option>
          <option value="copper">Copper</option>
        </Select>
      </Field>
    </div>
  ),
};
