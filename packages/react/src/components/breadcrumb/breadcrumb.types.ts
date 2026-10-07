import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TBreadcrumbProps = Omit<ComponentPropsWithoutRef<'nav'>, 'children'> & {
  readonly children: ReactNode;
};

export type TBreadcrumbItemProps = Omit<ComponentPropsWithoutRef<'li'>, 'children'> & {
  readonly children: ReactNode;
  /** Marks the page the reader is on. The content is then announced as the current page. */
  readonly current?: boolean;
};
