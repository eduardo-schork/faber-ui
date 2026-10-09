import { COLORS, RADII, SPACINGS } from '@faber-ui/tokens';
import type { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';

import { FLEX_ALIGNS, FLEX_DIRECTIONS, FLEX_JUSTIFIES, FLEX_WRAPS } from './flex.constants';
import { Flex, HFlex, VFlex } from './flex.ui';

const DemoItem = styled.div`
  padding: ${SPACINGS.SM} ${SPACINGS.MD};
  border-radius: ${RADII.MD};
  color: ${COLORS.ON_PRIMARY};
  background: ${COLORS.PRIMARY};
`;

const DemoArea = styled.div`
  width: 100%;
  padding: ${SPACINGS.LG};
  border-radius: ${RADII.LG};
  background: ${COLORS.SURFACE_PRIMARY};
`;

const TokenizedToolbar = styled(HFlex).attrs({
  align: FLEX_ALIGNS.CENTER,
  gap: SPACINGS.MD,
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})`
  width: 100%;
  padding: ${SPACINGS.MD};
`;

const items = ['Alpha', 'Beta', 'Gamma'];

const meta = {
  title: 'Components/Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  args: {
    align: FLEX_ALIGNS.STRETCH,
    direction: FLEX_DIRECTIONS.ROW,
    gap: 'MD',
    inline: false,
    justify: FLEX_JUSTIFIES.START,
    wrap: FLEX_WRAPS.NO_WRAP,
  },
  argTypes: {
    align: { control: 'select', options: Object.values(FLEX_ALIGNS) },
    direction: { control: 'select', options: Object.values(FLEX_DIRECTIONS) },
    gap: { control: 'select', options: Object.keys(SPACINGS) },
    justify: { control: 'select', options: Object.values(FLEX_JUSTIFIES) },
    outlineColor: { control: 'color' },
    wrap: { control: 'select', options: Object.values(FLEX_WRAPS) },
  },
  render: (args) => (
    <DemoArea>
      <Flex {...args}>
        {items.map((item) => (
          <DemoItem key={item}>{item}</DemoItem>
        ))}
      </Flex>
    </DemoArea>
  ),
} satisfies Meta<typeof Flex>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const ResponsiveDirection: TStory = {
  args: {
    direction: {
      MOBILE: FLEX_DIRECTIONS.COLUMN,
      TABLET: FLEX_DIRECTIONS.ROW,
    },
    gap: {
      MOBILE: 'SM',
      TABLET: 'LG',
    },
  },
};

export const AlignmentAndDistribution: TStory = {
  args: {
    align: FLEX_ALIGNS.CENTER,
    justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
  },
};

export const Wrapping: TStory = {
  args: {
    wrap: FLEX_WRAPS.WRAP,
  },
};

export const DebugOutline: TStory = {
  args: {
    outlineColor: COLORS.ACCENT,
  },
};

export const DirectionPresets: TStory = {
  render: () => (
    <VFlex gap="LG">
      <DemoArea>
        <HFlex align={FLEX_ALIGNS.CENTER} gap="MD" outlineColor={COLORS.ACCENT}>
          {items.map((item) => (
            <DemoItem key={item}>{item}</DemoItem>
          ))}
        </HFlex>
      </DemoArea>
      <DemoArea>
        <VFlex gap="MD" outlineColor={COLORS.ACCENT}>
          {items.map((item) => (
            <DemoItem key={item}>{item}</DemoItem>
          ))}
        </VFlex>
      </DemoArea>
    </VFlex>
  ),
};

export const StyledComposition: TStory = {
  render: () => (
    <DemoArea>
      <TokenizedToolbar outlineColor={COLORS.ACCENT}>
        <DemoItem>Navigation</DemoItem>
        <DemoItem>Actions</DemoItem>
      </TokenizedToolbar>
    </DemoArea>
  ),
};
