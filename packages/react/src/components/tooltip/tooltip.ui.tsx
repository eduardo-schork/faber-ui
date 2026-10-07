import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { SPACING_SCALE } from '@faber-ui/tokens';

import { TOOLTIP_DEFAULT_DELAY, TOOLTIP_SIDES } from './tooltip.constants';
import { TooltipContent } from './tooltip.styles';
import type { TTooltipProps } from './tooltip.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XS, 10);

export function Tooltip({
  children,
  content,
  defaultOpen,
  delay = TOOLTIP_DEFAULT_DELAY,
  onOpenChange,
  open,
  side = TOOLTIP_SIDES.TOP,
}: TTooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root
        {...(defaultOpen === undefined ? {} : { defaultOpen })}
        {...(onOpenChange === undefined ? {} : { onOpenChange })}
        {...(open === undefined ? {} : { open })}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent side={side} sideOffset={SIDE_OFFSET}>
            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
