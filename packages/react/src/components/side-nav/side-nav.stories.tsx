import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavLink } from '../nav-link';
import { SideNav, SideNavGroup } from './side-nav.ui';

const meta = {
  title: 'Components/Navigation/SideNav',
  component: SideNav,
  args: {
    'aria-label': 'Documentation',
    children: (
      <>
        <SideNavGroup label="Documentation">
          <NavLink current href="#">
            Get started
          </NavLink>
          <NavLink href="#">Components</NavLink>
        </SideNavGroup>
        <SideNavGroup label="On this page">
          <NavLink href="#">Install</NavLink>
          <NavLink href="#">Usage</NavLink>
        </SideNavGroup>
      </>
    ),
  },
} satisfies Meta<typeof SideNav>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};
