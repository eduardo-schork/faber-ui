'use client';

import { COLOR_SWATCH_ORIENTATIONS, COLORS, ColorSwatch, Grid } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function ColorSwatchDemo() {
  return (
    <DemoStack>
      <ColorSwatch color={COLORS.PRIMARY} label="PRIMARY" value="--faber-ui-color-primary" />
      <ColorSwatch color={COLORS.ACCENT} label="ACCENT" value="--faber-ui-color-accent" />
      <Grid columns={3} gap="SM">
        <ColorSwatch
          color={COLORS.PRIMARY}
          label="Primary"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
        <ColorSwatch
          color={COLORS.PRIMARY_HOVER}
          label="Hover"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
        <ColorSwatch
          color={COLORS.PRIMARY_ACTIVE}
          label="Active"
          orientation={COLOR_SWATCH_ORIENTATIONS.VERTICAL}
        />
      </Grid>
    </DemoStack>
  );
}

export const COLOR_SWATCH_DEMO = {
  Demo: ColorSwatchDemo,
  code: `import { COLORS, ColorSwatch } from '@faber-ui/react';

<ColorSwatch color={COLORS.PRIMARY} label="PRIMARY" value="--faber-ui-color-primary" />

<ColorSwatch color={COLORS.PRIMARY} label="Primary" orientation="vertical" />`,
} satisfies TComponentDemo;
