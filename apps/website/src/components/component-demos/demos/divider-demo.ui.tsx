'use client';

import { Divider, DIVIDER_ORIENTATIONS, FLEX_ALIGNS, HFlex, Text } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function DividerDemo() {
  return (
    <DemoStack>
      <Text.P>Billing</Text.P>
      <Divider />
      <Text.P>Invoices</Text.P>
      <HFlex align={FLEX_ALIGNS.CENTER} gap="SM">
        <Text.Span>Edit</Text.Span>
        <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} />
        <Text.Span>Duplicate</Text.Span>
        <Divider orientation={DIVIDER_ORIENTATIONS.VERTICAL} />
        <Text.Span>Archive</Text.Span>
      </HFlex>
    </DemoStack>
  );
}

export const DIVIDER_DEMO = {
  Demo: DividerDemo,
  code: `import { Divider } from '@faber-ui/react/divider';

<Divider />

<HFlex align="center" gap="SM">
  <Text.Span>Edit</Text.Span>
  <Divider orientation="vertical" />
  <Text.Span>Duplicate</Text.Span>
</HFlex>`,
} satisfies TComponentDemo;
