'use client';

import { Header, HFlex, NavLink, Text } from '@faber-ui/react';
import { DemoCanvas } from '../component-demos.styles';

import type { TComponentDemo } from '../component-demo.types';

function HeaderDemo() {
  return (
    <DemoCanvas>
      <Header>
        <Text.Strong>Acme</Text.Strong>
        <HFlex as="nav" aria-label="Example header" gap="XXS">
          <NavLink current href="#header">
            Projects
          </NavLink>
          <NavLink href="#header">Team</NavLink>
        </HFlex>
      </Header>
    </DemoCanvas>
  );
}

export const HEADER_DEMO = {
  Demo: HeaderDemo,
  code: `import { Header, HFlex, NavLink } from '@faber-ui/react';

<Header sticky>
  <Brand />
  <HFlex as="nav" aria-label="Primary" gap="XXS">
    <NavLink current href="/projects">Projects</NavLink>
    <NavLink href="/team">Team</NavLink>
  </HFlex>
</Header>`,
} satisfies TComponentDemo;
