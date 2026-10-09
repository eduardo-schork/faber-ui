'use client';

import { COLORS, Container } from '@faber-ui/react';
import { DemoBox, DemoCanvas } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function ContainerDemo() {
  return (
    <DemoCanvas>
      <Container center gap="XS" outlineColor={COLORS.ACCENT} size="320px">
        <DemoBox>max-width: 320px</DemoBox>
        <DemoBox>centered with logical margins</DemoBox>
      </Container>
    </DemoCanvas>
  );
}

export const CONTAINER_DEMO = {
  Demo: ContainerDemo,
  code: `import { Container } from '@faber-ui/react/container';

// Follows the breakpoint scale: 720, 960, 1140, 1320px.
<Container as="main" center>
  <Page />
</Container>

// A token name or any CSS length caps the width instead.
<Container center size="320px">
  <Card />
</Container>`,
} satisfies TComponentDemo;
