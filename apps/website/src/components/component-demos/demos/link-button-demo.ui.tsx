'use client';

import { BUTTON_COLORS, BUTTON_VARIANTS, LinkButton } from '@faber-ui/react';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@faber-ui/icons';
import { DemoRow } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function LinkButtonDemo() {
  return (
    <DemoRow>
      <LinkButton as={NextLink} href="/docs" endIcon={<ArrowRightIcon />}>
        Get started
      </LinkButton>
      <LinkButton
        as={NextLink}
        href="/docs/customization"
        color={BUTTON_COLORS.NEUTRAL}
        variant={BUTTON_VARIANTS.OUTLINE}
      >
        Theming
      </LinkButton>
      <LinkButton href="#link-button" color={BUTTON_COLORS.ACCENT} variant={BUTTON_VARIANTS.LIGHT}>
        Plain anchor
      </LinkButton>
    </DemoRow>
  );
}

export const LINK_BUTTON_DEMO = {
  Demo: LinkButtonDemo,
  code: `import { ArrowRightIcon } from '@faber-ui/icons';
import { LinkButton } from '@faber-ui/react/link-button';
import NextLink from 'next/link';

<LinkButton as={NextLink} href="/docs" endIcon={<ArrowRightIcon />}>
  Get started
</LinkButton>

<LinkButton as={NextLink} href="/docs/customization" color="neutral" variant="outline">
  Theming
</LinkButton>

// Without as, it renders a plain anchor.
<LinkButton href="#pricing">Plain anchor</LinkButton>`,
} satisfies TComponentDemo;
