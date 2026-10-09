'use client';

import { Button, BUTTON_VARIANTS, SkipLink } from '@faber-ui/react';
import { DemoNote, DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function SkipLinkDemo() {
  return (
    <DemoStack>
      <DemoNote>
        The link is off screen until it has keyboard focus. Press the button, then Shift and Tab.
      </DemoNote>
      <DemoRow>
        <SkipLink href="#skip-link">Skip to this example</SkipLink>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>Focus me first</Button>
      </DemoRow>
    </DemoStack>
  );
}

export const SKIP_LINK_DEMO = {
  Demo: SkipLinkDemo,
  code: `import { SkipLink } from '@faber-ui/react/skip-link';

// First in the document, before the header.
<SkipLink href="#content" />

<main id="content" tabIndex={-1} />`,
} satisfies TComponentDemo;
