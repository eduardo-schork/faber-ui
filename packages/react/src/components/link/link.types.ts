import type { ElementType } from 'react';

import type { TTypographyComponentProps } from '../typography/typography.types';

export type TLinkProps = TTypographyComponentProps<'a'> & {
  /** A router link component that renders the anchor, such as the Next.js `Link`. */
  readonly as?: ElementType;
};
