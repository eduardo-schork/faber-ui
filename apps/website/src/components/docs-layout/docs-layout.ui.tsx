'use client';

import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';

import { Lead, Caption, PageWidth } from '@/components/sheet/sheet.styles';
import { DOC_PAGES } from '@/site/site.constants';

import {
  DocsArticle,
  DocsFrame,
  DocsHeader,
  DocsSidebar,
  DocsTitle,
  SidebarGroup,
  SidebarHeading,
  SidebarLink,
} from './docs-layout.styles';

type TDocsAnchor = {
  readonly id: string;
  readonly label: string;
};

export type TDocsSectionLink = TDocsAnchor & {
  readonly items?: readonly TDocsAnchor[];
};

type TDocsLayoutProps = PropsWithChildren<{
  readonly kicker: string;
  readonly lead: string;
  readonly sections: readonly TDocsSectionLink[];
  readonly title: string;
}>;

export function DocsLayout({ children, kicker, lead, sections, title }: TDocsLayoutProps) {
  const pathname = usePathname();

  return (
    <PageWidth>
      <DocsFrame>
        <DocsSidebar aria-label="Documentation">
          <SidebarGroup>
            <SidebarHeading>Documentation</SidebarHeading>
            {DOC_PAGES.map(({ href, label }) => (
              <SidebarLink
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </SidebarLink>
            ))}
          </SidebarGroup>

          <SidebarGroup data-group="on-this-page">
            <SidebarHeading>On this page</SidebarHeading>
            {sections.flatMap(({ id, items = [], label }) => [
              <SidebarLink key={id} href={`#${id}`}>
                {label}
              </SidebarLink>,
              ...items.map((item) => (
                <SidebarLink key={item.id} href={`#${item.id}`} data-depth="1">
                  {item.label}
                </SidebarLink>
              )),
            ])}
          </SidebarGroup>
        </DocsSidebar>

        <DocsArticle>
          <DocsHeader>
            <Caption data-tone="markup">{kicker}</Caption>
            <DocsTitle>{title}</DocsTitle>
            <Lead>{lead}</Lead>
          </DocsHeader>
          {children}
        </DocsArticle>
      </DocsFrame>
    </PageWidth>
  );
}
