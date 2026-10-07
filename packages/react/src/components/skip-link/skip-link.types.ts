import type { TLinkProps } from '../link';

export type TSkipLinkProps = Omit<TLinkProps, 'href'> & {
  /** The fragment of the main content region. Defaults to `#main`. */
  readonly href?: string;
};
