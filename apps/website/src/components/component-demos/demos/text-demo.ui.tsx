'use client';

import { Text, TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES, TYPOGRAPHY_WEIGHTS } from '@faber-ui/react';
import { DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function TextDemo() {
  return (
    <DemoStack>
      <Text.P>
        A paragraph with <Text.Strong>strong</Text.Strong> and <Text.Em>emphasized</Text.Em>{' '}
        phrases, and a <Text.A href="#text">link that keeps its underline</Text.A>.
      </Text.P>
      <Text.P tone={TYPOGRAPHY_TONES.SECONDARY} size={TYPOGRAPHY_SIZES.SMALLER}>
        Secondary tone, smaller size. Still a paragraph element.
      </Text.P>
      <Text.Span truncate weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}>
        A truncated span follows the width of its parent and ends in an ellipsis when the line runs
        out of room, which this sentence is long enough to demonstrate.
      </Text.Span>
      <Text.Small tone={TYPOGRAPHY_TONES.SECONDARY}>Small print, rendered as small.</Text.Small>
      <Text.P>
        Inline code such as <Text.Code>bun add @faber-ui/react</Text.Code> sits on its own surface.
      </Text.P>
    </DemoStack>
  );
}

export const TEXT_DEMO = {
  Demo: TextDemo,
  code: `import { Text } from '@faber-ui/react/text';

<Text.P>
  A paragraph with <Text.Strong>strong</Text.Strong> phrases
  and a <Text.A href="/docs">link</Text.A>.
</Text.P>

<Text.P tone="secondary" size="smaller">Secondary tone</Text.P>
<Text.Span truncate>Long content constrained by its parent</Text.Span>`,
} satisfies TComponentDemo;
