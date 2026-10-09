'use client';

import { Grid } from '@faber-ui/react';
import { DemoBox, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function GridDemo() {
  return (
    <DemoStack>
      <Grid columns={3} gap="XS">
        <DemoBox>1</DemoBox>
        <DemoBox>2</DemoBox>
        <DemoBox>3</DemoBox>
      </Grid>
      <Grid columns="2fr 1fr" gap="XS">
        <DemoBox>2fr</DemoBox>
        <DemoBox>1fr</DemoBox>
      </Grid>
      <Grid minColumnWidth="7rem" gap="XS">
        <DemoBox>fits</DemoBox>
        <DemoBox>as many</DemoBox>
        <DemoBox>as the</DemoBox>
        <DemoBox>width</DemoBox>
        <DemoBox>allows</DemoBox>
      </Grid>
    </DemoStack>
  );
}

export const GRID_DEMO = {
  Demo: GridDemo,
  code: `import { Grid } from '@faber-ui/react/grid';

<Grid columns={3} gap="XS" />

// Unequal tracks take a template.
<Grid columns="2fr 1fr" gap="XS" />

// Or let the width decide how many columns fit.
<Grid minColumnWidth="7rem" gap="XS" />

// Any value can change per breakpoint.
<Grid columns={{ MOBILE: 1, TABLET: 2, DESKTOP: 3 }} />`,
} satisfies TComponentDemo;
