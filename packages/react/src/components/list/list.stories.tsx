import type { Meta, StoryObj } from '@storybook/react-vite';

import { LIST_MARKERS } from './list.constants';
import { List, ListItem } from './list.ui';

const meta = {
  title: 'Atoms/List',
  component: List,
  args: {
    children: (
      <>
        <ListItem>Install the package.</ListItem>
        <ListItem>Import the stylesheet.</ListItem>
        <ListItem>Render a component.</ListItem>
      </>
    ),
  },
  argTypes: { marker: { control: 'select', options: Object.values(LIST_MARKERS) } },
} satisfies Meta<typeof List>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Ordered: TStory = { args: { ordered: true } };

export const WithoutMarkers: TStory = { args: { marker: LIST_MARKERS.NONE, gap: 'SM' } };
