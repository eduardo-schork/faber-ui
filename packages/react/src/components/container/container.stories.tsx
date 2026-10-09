import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLORS, CONTAINER_SIZES, RADII, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { Container } from './container.ui';

const DemoContent = styled.div`
  padding: ${SPACINGS.LG};
  border-radius: ${RADII.MD};
  color: ${COLORS.ON_PRIMARY};
  background: ${COLORS.PRIMARY};
`;

const meta = {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    center: true,
    gap: 'MD',
  },
  argTypes: {
    align: { control: false },
    justify: { control: false },
    outlineColor: { control: 'color' },
    size: { control: 'text' },
    wrap: { control: false },
  },
  render: (args) => (
    <Container {...args}>
      <DemoContent>Responsive page content</DemoContent>
      <DemoContent>Resize the canvas to inspect each width step</DemoContent>
    </Container>
  ),
} satisfies Meta<typeof Container>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const ResponsiveScale: TStory = {
  args: {
    outlineColor: COLORS.ACCENT,
  },
};

export const CustomMaximum: TStory = {
  args: {
    outlineColor: COLORS.ACCENT,
    size: '1080px',
  },
};

export const NamedMaximums: TStory = {
  render: () => (
    <Container center gap="LG">
      {Object.entries(CONTAINER_SIZES).map(([name, size]) => (
        <Container key={name} center outlineColor={COLORS.ACCENT} size={size}>
          <DemoContent>
            {name}: {size}
          </DemoContent>
        </Container>
      ))}
    </Container>
  ),
};

export const SemanticMain: TStory = {
  args: {
    as: 'main',
    size: 'MEDIUM',
  },
};
