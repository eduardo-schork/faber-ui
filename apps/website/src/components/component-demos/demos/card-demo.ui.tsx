'use client';

import { Card, Text, TYPOGRAPHY_TONES } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function CardDemo() {
  return (
    <DemoStack>
      <Card as="section" aria-label="Plan">
        <Text.Strong>Team plan</Text.Strong>
        <Text.P tone={TYPOGRAPHY_TONES.SECONDARY}>
          12 seats, renews on the first of the month.
        </Text.P>
      </Card>
      <Card padding="small">
        <Text.Small>padding=&quot;small&quot;</Text.Small>
      </Card>
    </DemoStack>
  );
}

export const CARD_DEMO = {
  Demo: CardDemo,
  code: `import { Card } from '@faber-ui/react/card';

<Card as="section" aria-label="Plan">
  <Text.Strong>Team plan</Text.Strong>
  <Text.P tone="secondary">12 seats, renews monthly.</Text.P>
</Card>

<Card padding="small">Compact</Card>`,
} satisfies TComponentDemo;
