import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../button';
import { BUTTON_VARIANTS } from '../button/button.constants';
import { Card } from '../card';
import { EmptyState } from './empty-state.ui';

const meta = {
  title: 'Components/Display/EmptyState',
  component: EmptyState,
  args: {
    title: 'No invoices yet',
    description: 'Invoices appear here after the first payment.',
  },
} satisfies Meta<typeof EmptyState>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const WithActions: TStory = {
  render: (args) => (
    <Card>
      <EmptyState
        {...args}
        actions={
          <>
            <Button>Create invoice</Button>
            <Button variant={BUTTON_VARIANTS.OUTLINE}>Import</Button>
          </>
        }
      />
    </Card>
  ),
};
