import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { TButtonProps } from '../button';
import type { TVFlexProps } from '../flex';

export type TCodeBlockProps = Omit<TVFlexProps, 'as' | 'children'> & {
  /** A highlighted rendering of the code. The plain `code` is shown when this is omitted. */
  readonly children?: ReactNode;
  /** The source text. It is what the copy button writes to the clipboard. */
  readonly code: string;
  readonly copiedLabel?: string;
  readonly copyLabel?: string;
  /** Removes the copy button. */
  readonly hideCopy?: boolean;
  /** A file name or language shown above the code. */
  readonly label?: ReactNode;
};

/** A button that copies `code` and confirms it for a moment. */
export type TCodeBlockCopyProps = Omit<TButtonProps, 'children'> & {
  readonly code: string;
  readonly copiedLabel?: string;
  readonly copyLabel?: string;
};

export type TCodeBlockPreProps = ComponentPropsWithoutRef<'pre'>;
