import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import type { TButtonColor, TButtonSize, TButtonVariant } from '../button';

export type TLinkButtonProps = Omit<ComponentPropsWithoutRef<'a'>, 'color'> & {
  /** A router link component that renders the anchor, such as the Next.js `Link`. */
  readonly as?: ElementType;
  readonly color?: TButtonColor;
  readonly endIcon?: ReactNode;
  readonly fullWidth?: boolean;
  readonly size?: TButtonSize;
  readonly startIcon?: ReactNode;
  readonly variant?: TButtonVariant;
};
