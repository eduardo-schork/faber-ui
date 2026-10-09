import type { ReactNode } from 'react';

import type { TVFlexProps } from '../flex';

export type TEmptyStateProps = Omit<TVFlexProps, 'children' | 'title'> & {
  /** Buttons or links that move the reader forward. */
  readonly actions?: ReactNode;
  readonly description?: ReactNode;
  /** An icon or illustration shown above the title. It is treated as decoration. */
  readonly media?: ReactNode;
  readonly title: ReactNode;
};
