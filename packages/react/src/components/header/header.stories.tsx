import type { Meta, StoryObj } from '@storybook/react-vite';

import { HFlex } from '../flex';
import { NavLink } from '../nav-link';
import { Text } from '../text';
import { Header } from './header.ui';

const meta = {
  title: 'Molecules/Header',
  component: Header,
  args: {
    children: (
      <>
        <Text.Strong>Faber UI</Text.Strong>
        <HFlex as="nav" aria-label="Primary" gap="XXS">
          <NavLink current href="#">
            Components
          </NavLink>
          <NavLink href="#">Theming</NavLink>
        </HFlex>
      </>
    ),
  },
} satisfies Meta<typeof Header>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Sticky: TStory = { args: { sticky: true } };
