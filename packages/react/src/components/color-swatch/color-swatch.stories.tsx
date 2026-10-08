import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLORS } from '@faber-ui/tokens';

import { HFlex } from '../flex';
import { COLOR_SWATCH_ORIENTATIONS } from './color-swatch.constants';
import { ColorSwatch } from './color-swatch.ui';

const meta = {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  args: {
    color: COLORS.PRIMARY,
    label: 'PRIMARY',
    value: '--faber-ui-color-primary',
  },
} satisfies Meta<typeof ColorSwatch>;

export default meta;

type TStory = StoryObj<typeof meta>;

export const Playground: TStory = {};

export const Vertical: TStory = {
  render: () => (
    <HFlex gap="MD">
      <ColorSwatch
        color={COLORS.PRIMARY}
        label="Primary"
        orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
      />
      <ColorSwatch
        color={COLORS.ACCENT}
        label="Accent"
        orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
      />
      <ColorSwatch
        color={COLORS.ERROR}
        label="Error"
        orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
      />
    </HFlex>
  ),
};

export const Gradient: TStory = {
  args: {
    color: `linear-gradient(135deg, ${COLORS.PRIMARY} 50%, ${COLORS.ACCENT} 50%)`,
    label: 'Primary and accent',
    value: undefined,
  },
};
