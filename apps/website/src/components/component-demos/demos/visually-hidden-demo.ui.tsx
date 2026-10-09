'use client';

import {
  Badge,
  BADGE_COLORS,
  Button,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  Text,
  VisuallyHidden,
} from '@faber-ui/react';
import { DemoFocusZone, DemoNote, DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function VisuallyHiddenDemo() {
  return (
    <DemoStack>
      <DemoRow>
        <Badge color={BADGE_COLORS.ACCENT}>
          3<VisuallyHidden> unread notifications</VisuallyHidden>
        </Badge>
        <DemoNote>Sighted readers see 3; a screen reader hears the full phrase.</DemoNote>
      </DemoRow>
      <DemoFocusZone>
        <DemoNote>Tab into this box: a hidden link appears while it has focus.</DemoNote>
        <VisuallyHidden focusable>
          <Text.A href="#visually-hidden">Skip to the example</Text.A>
        </VisuallyHidden>
        <Button variant={BUTTON_VARIANTS.OUTLINE} size={BUTTON_SIZES.SMALL}>
          Next focusable control
        </Button>
      </DemoFocusZone>
    </DemoStack>
  );
}

export const VISUALLY_HIDDEN_DEMO = {
  Demo: VisuallyHiddenDemo,
  code: `import { VisuallyHidden } from '@faber-ui/react/visually-hidden';

<Badge>
  3<VisuallyHidden> unread notifications</VisuallyHidden>
</Badge>

<VisuallyHidden focusable>
  <a href="#content">Skip to content</a>
</VisuallyHidden>`,
} satisfies TComponentDemo;
