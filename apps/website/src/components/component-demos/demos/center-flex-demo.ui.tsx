'use client';

import { COLORS, Spinner, SPINNER_SIZES, Text } from '@faber-ui/react';
import { DemoCentered } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function CenterFlexDemo() {
  return (
    <DemoCentered gap="SM" outlineColor={COLORS.ACCENT}>
      <Spinner decorative size={SPINNER_SIZES.SMALL} />
      <Text.Span>Centered on both axes</Text.Span>
    </DemoCentered>
  );
}

export const CENTER_FLEX_DEMO = {
  Demo: CenterFlexDemo,
  code: `import { CenterFlex } from '@faber-ui/react/center-flex';

<CenterFlex gap="SM">
  <Spinner decorative size="small" />
  <Text.Span>Centered on both axes</Text.Span>
</CenterFlex>`,
} satisfies TComponentDemo;
