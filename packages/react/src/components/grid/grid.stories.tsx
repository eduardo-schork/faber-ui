import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../card';
import { Grid } from './grid.ui';

const cells = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((label) => (
  <Card key={label}>{label}</Card>
));

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  args: { children: cells, columns: 3, gap: 'MD' },
} satisfies Meta<typeof Grid>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Responsive: TStory = {
  args: { columns: { MOBILE: 1, TABLET: 2, DESKTOP: 3 } },
};

export const UnequalTracks: TStory = {
  args: { columns: '2fr 1fr', children: cells.slice(0, 2) },
};

export const AutoFit: TStory = {
  args: { minColumnWidth: '12rem' },
};
