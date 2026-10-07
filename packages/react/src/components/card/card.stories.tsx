import type { Meta, StoryObj } from '@storybook/react-vite';
import { SPACINGS } from '@faber-ui/tokens';

import { CARD_PADDINGS } from './card.constants';
import { Card } from './card.ui';

const meta = {
  title: 'Atoms/Card',
  component: Card,
  parameters: { layout: 'centered' },
  args: { children: 'A surface that groups related content.', padding: CARD_PADDINGS.MEDIUM },
  argTypes: { padding: { control: 'select', options: Object.values(CARD_PADDINGS) } },
} satisfies Meta<typeof Card>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Paddings: TStory = {
  render: () => (
    <div style={{ display: 'grid', gap: SPACINGS.MD }}>
      {Object.values(CARD_PADDINGS).map((padding) => (
        <Card key={padding} padding={padding}>
          padding: {padding}
        </Card>
      ))}
    </div>
  ),
};
