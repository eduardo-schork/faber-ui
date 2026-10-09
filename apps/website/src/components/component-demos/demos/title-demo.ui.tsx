'use client';

import { Divider, Title, TYPOGRAPHY_SIZES } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function TitleDemo() {
  return (
    <DemoStack>
      <Title.H1>Heading level 1</Title.H1>
      <Title.H2>Heading level 2</Title.H2>
      <Title.H3>Heading level 3</Title.H3>
      <Title.H4>Heading level 4</Title.H4>
      <Divider />
      <Title.H2 size={TYPOGRAPHY_SIZES.SMALLER}>Still an h2, drawn at the smaller size</Title.H2>
    </DemoStack>
  );
}

export const TITLE_DEMO = {
  Demo: TitleDemo,
  code: `import { Title } from '@faber-ui/react/title';

<Title.H1>Heading level 1</Title.H1>
<Title.H2>Heading level 2</Title.H2>

// The level is semantic; the size is visual.
<Title.H2 size="smaller">Still an h2</Title.H2>`,
} satisfies TComponentDemo;
