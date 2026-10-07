import * as PopoverPrimitive from '@radix-ui/react-popover';
import { SPACING_SCALE } from '@faber-ui/tokens';

import { POPOVER_ALIGNMENTS, POPOVER_SIDES } from './popover.constants';
import { PopoverContent } from './popover.styles';
import type { TPopoverProps } from './popover.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XS, 10);

export function Popover({
  align = POPOVER_ALIGNMENTS.CENTER,
  children,
  content,
  defaultOpen,
  label,
  onOpenChange,
  open,
  side = POPOVER_SIDES.BOTTOM,
}: TPopoverProps) {
  return (
    <PopoverPrimitive.Root
      {...(defaultOpen === undefined ? {} : { defaultOpen })}
      {...(onOpenChange === undefined ? {} : { onOpenChange })}
      {...(open === undefined ? {} : { open })}
    >
      <PopoverPrimitive.Trigger asChild>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverContent align={align} aria-label={label} side={side} sideOffset={SIDE_OFFSET}>
          {content}
        </PopoverContent>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
