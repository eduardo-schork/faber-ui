'use client';

import { NavLink, SideNav, SideNavGroup } from '@faber-ui/react';

import type { TComponentDemo } from '../component-demo.types';

function SideNavDemo() {
  return (
    <SideNav aria-label="Example sections">
      <SideNavGroup label="Guides">
        <NavLink current href="#side-nav">
          Get started
        </NavLink>
        <NavLink href="#side-nav">Theming</NavLink>
      </SideNavGroup>
      <SideNavGroup label="Reference">
        <NavLink href="#side-nav">Components</NavLink>
      </SideNavGroup>
    </SideNav>
  );
}

export const SIDE_NAV_DEMO = {
  Demo: SideNavDemo,
  code: `import { NavLink, SideNav, SideNavGroup } from '@faber-ui/react';

<SideNav aria-label="Documentation">
  <SideNavGroup label="Guides">
    <NavLink current href="/docs">Get started</NavLink>
    <NavLink href="/docs/customization">Customization</NavLink>
  </SideNavGroup>
</SideNav>`,
} satisfies TComponentDemo;
