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
          <SidebarGroup label="Documentation">
            {DOC_PAGES.map(({ href, label }) => (
              <SidebarLink key={href} href={href} current={pathname === href}>
                {label}
              </SidebarLink>
            ))}
          </SidebarGroup>

          <SidebarGroup label="On this page" data-group="on-this-page">
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
            <Caption data-emphasis="markup">{kicker}</Caption>
            <DocsTitle>{title}</DocsTitle>
            <Lead>{lead}</Lead>
          </DocsHeader>
          {children}
        </DocsArticle>
      </DocsFrame>
    </PageWidth>
  );
}
