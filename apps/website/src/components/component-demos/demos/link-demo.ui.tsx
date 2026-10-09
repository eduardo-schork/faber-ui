'use client';

import { Link, Text, TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '@faber-ui/react';
import NextLink from 'next/link';
import { DemoRow, DemoStack } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function LinkDemo() {
  return (
    <DemoStack>
      <Text.P>
        Routed through Next.js:{' '}
        <Link as={NextLink} href="/docs/foundations">
          the token tables
        </Link>
        .
      </Text.P>
      <DemoRow>
        <Link href="#link" tone={TYPOGRAPHY_TONES.PRIMARY}>
          Primary tone
        </Link>
        <Link href="#link" tone={TYPOGRAPHY_TONES.SECONDARY} size={TYPOGRAPHY_SIZES.SMALLER}>
          Secondary, smaller
        </Link>
      </DemoRow>
    </DemoStack>
  );
}

export const LINK_DEMO = {
  Demo: LinkDemo,
  code: `import { Link } from '@faber-ui/react/link';
import NextLink from 'next/link';

<Link as={NextLink} href="/docs/foundations">
  the token tables
</Link>

<Link href="/changelog" tone="primary">
  Primary tone
</Link>`,
} satisfies TComponentDemo;
