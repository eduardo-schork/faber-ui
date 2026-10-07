import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type TNavLinkProps = ComponentPropsWithoutRef<'a'> & {
  /** A router link component that renders the anchor, such as the Next.js `Link`. */
  readonly as?: ElementType;
  /** Marks the link as the current page. */
  readonly current?: boolean;
};
