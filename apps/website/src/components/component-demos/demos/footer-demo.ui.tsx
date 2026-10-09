'use client';

import { FLEX_JUSTIFIES, FLEX_WRAPS, Footer, HFlex, Link, Text } from '@faber-ui/react';
import { DemoCanvas } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function FooterDemo() {
  return (
    <DemoCanvas>
      <Footer>
        <HFlex justify={FLEX_JUSTIFIES.SPACE_BETWEEN} gap="MD" wrap={FLEX_WRAPS.WRAP}>
          <Text.Span>Acme, Inc.</Text.Span>
          <Link href="#footer">Privacy</Link>
        </HFlex>
      </Footer>
    </DemoCanvas>
  );
}

export const FOOTER_DEMO = {
  Demo: FooterDemo,
  code: `import { Footer } from '@faber-ui/react/footer';

<Footer>
  <HFlex justify="space-between" gap="MD">
    <Text.Span>Acme, Inc.</Text.Span>
    <Link href="/privacy">Privacy</Link>
  </HFlex>
</Footer>`,
} satisfies TComponentDemo;
