'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  Link,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
} from '@faber-ui/react';
import NextLink from 'next/link';

import type { TComponentDemo } from '../component-demo.types';

function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link
          as={NextLink}
          href="/"
          tone={TYPOGRAPHY_TONES.SECONDARY}
          size={TYPOGRAPHY_SIZES.SMALLER}
        >
          Home
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link
          as={NextLink}
          href="/docs"
          tone={TYPOGRAPHY_TONES.SECONDARY}
          size={TYPOGRAPHY_SIZES.SMALLER}
        >
          Documentation
        </Link>
      </BreadcrumbItem>
      <BreadcrumbItem current>Components</BreadcrumbItem>
    </Breadcrumb>
  );
}

export const BREADCRUMB_DEMO = {
  Demo: BreadcrumbDemo,
  code: `import { Breadcrumb, BreadcrumbItem, Link } from '@faber-ui/react';

<Breadcrumb>
  <BreadcrumbItem>
    <Link href="/">Home</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <Link href="/docs">Documentation</Link>
  </BreadcrumbItem>
  <BreadcrumbItem current>Components</BreadcrumbItem>
</Breadcrumb>`,
} satisfies TComponentDemo;
