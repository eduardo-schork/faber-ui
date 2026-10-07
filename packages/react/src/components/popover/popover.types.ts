import type { ReactElement, ReactNode } from 'react';

import type { TPopoverAlignment, TPopoverSide } from './popover.constants';

export type TPopoverProps = {
  readonly align?: TPopoverAlignment;
  /** The single button that opens the popover. It must forward its ref and props. */
  readonly children: ReactElement;
  readonly content: ReactNode;
  readonly defaultOpen?: boolean;
  /** Names the popover for assistive technology. */
  readonly label: string;
  readonly onOpenChange?: (open: boolean) => void;
  readonly open?: boolean;
  readonly side?: TPopoverSide;
};
