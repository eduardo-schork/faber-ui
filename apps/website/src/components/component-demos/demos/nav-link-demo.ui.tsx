'use client';

import { FLEX_WRAPS, HFlex, NavLink } from '@faber-ui/react';
import { useState } from 'react';

import type { TComponentDemo } from '../component-demo.types';

function NavLinkDemo() {
  const [current, setCurrent] = useState('Overview');

  return (
    <HFlex as="nav" aria-label="Example" gap="XXS" wrap={FLEX_WRAPS.WRAP}>
      {['Overview', 'Activity', 'Settings'].map((label) => (
        <NavLink
          key={label}
          href="#nav-link"
          current={label === current}
          onClick={(event) => {
            event.preventDefault();
            setCurrent(label);
          }}
        >
          {label}
        </NavLink>
      ))}
    </HFlex>
  );
}

export const NAV_LINK_DEMO = {
  Demo: NavLinkDemo,
  code: `import { NavLink } from '@faber-ui/react/nav-link';
import Link from 'next/link';

<nav aria-label="Primary">
  <NavLink as={Link} href="/overview" current={pathname === '/overview'}>
    Overview
  </NavLink>
  <NavLink as={Link} href="/activity">Activity</NavLink>
</nav>`,
} satisfies TComponentDemo;
