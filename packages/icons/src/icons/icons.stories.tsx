import type { Meta, StoryObj } from '@storybook/react-vite';

import { ICON_SIZES } from '../icon/icon.constants';
import * as ICONS from './icons.ui';

const { CheckIcon, CloseIcon } = ICONS;

const meta = {
  title: 'Foundations/Icons',
  component: CloseIcon,
  parameters: { layout: 'centered' },
  args: { size: ICON_SIZES.MEDIUM },
  argTypes: { size: { control: 'select', options: Object.values(ICON_SIZES) } },
} satisfies Meta<typeof CloseIcon>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Catalog: TStory = {
  render: (args) => (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
        gap: '24px',
        margin: 0,
        padding: 0,
        listStyle: 'none',
      }}
    >
      {Object.entries(ICONS).map(([name, Icon]) => (
        <li key={name} style={{ display: 'grid', justifyItems: 'center', gap: '8px' }}>
          <Icon {...args} />
          <code>{name}</code>
        </li>
      ))}
    </ul>
  ),
};

export const Sizes: TStory = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      {Object.values(ICON_SIZES).map((size) => (
        <CheckIcon key={size} size={size} />
      ))}
    </div>
  ),
};
