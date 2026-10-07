import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from '../link';
import { Breadcrumb, BreadcrumbItem } from './breadcrumb.ui';

const meta = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  args: { children: null },
  argTypes: { children: { control: false } },
  render: (args) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <Link href="#home" tone="secondary">
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="#settings" tone="secondary">
          Settings
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem current>Billing</BreadcrumbItem>
    </Breadcrumb>
  ),
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
