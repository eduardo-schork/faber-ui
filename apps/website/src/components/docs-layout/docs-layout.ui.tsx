'use client';

import { SideNavGroup } from '@faber-ui/react';
import type { PropsWithChildren } from 'react';

import { Lead, Caption, PageWidth } from '@/components/sheet/sheet.styles';

import {
  DocsArticle,
  DocsFrame,
  DocsHeader,
  DocsSidebar,
  DocsTitle,
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
  return (
    <PageWidth>
      <DocsFrame>
        <DocsSidebar aria-label="On this page">
          <SideNavGroup label="On this page">
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
          </SideNavGroup>
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
