'use client';

import { Box, Text } from '@faber-ui/react';
import { DemoBox, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function BoxDemo() {
  return (
    <DemoStack>
      <DemoBox as={Box} padding="LG">
        <Text.P>
          Padding from a token. Inline content such as <Text.Strong>this</Text.Strong> keeps flowing
          as text.
        </Text.P>
      </DemoBox>
    </DemoStack>
  );
}

export const BOX_DEMO = {
  Demo: BoxDemo,
  code: `import { Box } from '@faber-ui/react/box';

<Box as="section" padding="LG">
  Inline content such as <strong>this</strong> keeps flowing as text.
</Box>

<Box padding={{ MOBILE: 'MD', TABLET: 'XL' }} />`,
} satisfies TComponentDemo;
