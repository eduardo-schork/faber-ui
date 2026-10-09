'use client';

import { Badge, BADGE_COLORS } from '@faber-ui/react';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function BadgeDemo() {
  return (
    <DemoRow>
      <Badge>Draft</Badge>
      <Badge color={BADGE_COLORS.PRIMARY}>Stable</Badge>
      <Badge color={BADGE_COLORS.ACCENT}>Breaking</Badge>
    </DemoRow>
  );
}

export const BADGE_DEMO = {
  Demo: BadgeDemo,
  code: `import { Badge, BADGE_COLORS } from '@faber-ui/react/badge';

<Badge>Draft</Badge>
<Badge color={BADGE_COLORS.PRIMARY}>Stable</Badge>
<Badge color={BADGE_COLORS.ACCENT}>Breaking</Badge>`,
} satisfies TComponentDemo;
