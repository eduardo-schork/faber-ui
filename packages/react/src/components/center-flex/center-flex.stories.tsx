import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLORS, RADII, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { CenterFlex } from './center-flex.ui';

const DemoCenter = styled(CenterFlex)`
  min-height: ${SIZES.XXL};
  padding: ${SPACINGS.LG};
  border-radius: ${RADII.LG};
  background: ${COLORS.SURFACE_PRIMARY};
`;

const DemoItem = styled.div`
  padding: ${SPACINGS.SM} ${SPACINGS.MD};
  border-radius: ${RADII.MD};
  color: ${COLORS.ON_PRIMARY};
  background: ${COLORS.PRIMARY};
`;

const meta = {
  title: 'Components/Layout/CenterFlex',
  component: CenterFlex,
  parameters: {
    layout: 'padded',
  },
  args: {
    gap: 'MD',
  },
  argTypes: {
    outlineColor: { control: 'color' },
    wrap: { control: false },
  },
  render: (args) => (
    <DemoCenter {...args}>
      <DemoItem>Centered content</DemoItem>
    </DemoCenter>
  ),
} satisfies Meta<typeof CenterFlex>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const MultipleItems: TStory = {
  render: (args) => (
    <DemoCenter {...args}>
      <DemoItem>First</DemoItem>
      <DemoItem>Second</DemoItem>
      <DemoItem>Third</DemoItem>
    </DemoCenter>
  ),
};

export const DebugOutline: TStory = {
  args: {
    outlineColor: COLORS.ACCENT,
  },
};

export const SemanticSection: TStory = {
  args: {
    as: 'section',
    'aria-label': 'Centered example',
  },
};
