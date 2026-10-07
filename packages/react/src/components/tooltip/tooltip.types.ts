import type { ReactElement, ReactNode } from 'react';

import type { TTooltipSide } from './tooltip.constants';

export type TTooltipProps = {
  /** The single focusable element the tooltip describes. It must forward its ref and props. */
  readonly children: ReactElement;
  readonly content: ReactNode;
  readonly defaultOpen?: boolean;
  readonly delay?: number;
  readonly onOpenChange?: (open: boolean) => void;
  readonly open?: boolean;
  readonly side?: TTooltipSide;
};
