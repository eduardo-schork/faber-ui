import * as MenuPrimitive from '@radix-ui/react-dropdown-menu';
import { SPACING_SCALE } from '@faber-ui/tokens';
import { forwardRef } from 'react';

import { MENU_ALIGNMENTS, MENU_ITEM_COLORS } from './menu.constants';
import { MenuContent, StyledMenuItem, StyledMenuLabel, StyledMenuSeparator } from './menu.styles';
import type {
  TMenuItemProps,
  TMenuLabelProps,
  TMenuProps,
  TMenuSeparatorProps,
} from './menu.types';

const SIDE_OFFSET = Number.parseInt(SPACING_SCALE.XXS, 10);

export function Menu({
  align = MENU_ALIGNMENTS.START,
  children,
  defaultOpen,
  onOpenChange,
  open,
  trigger,
}: TMenuProps) {
  return (
    <MenuPrimitive.Root
      {...(defaultOpen === undefined ? {} : { defaultOpen })}
      {...(onOpenChange === undefined ? {} : { onOpenChange })}
      {...(open === undefined ? {} : { open })}
    >
      <MenuPrimitive.Trigger asChild>{trigger}</MenuPrimitive.Trigger>
      <MenuPrimitive.Portal>
        <MenuContent align={align} sideOffset={SIDE_OFFSET}>
          {children}
        </MenuContent>
      </MenuPrimitive.Portal>
    </MenuPrimitive.Root>
  );
}

export const MenuItem = forwardRef<HTMLDivElement, TMenuItemProps>(function MenuItem(
  { color = MENU_ITEM_COLORS.NEUTRAL, disabled = false, onSelect, ...nativeProps },
  ref,
) {
  return (
    <StyledMenuItem
      {...nativeProps}
      ref={ref}
      data-color={color}
      disabled={disabled}
      onSelect={() => {
        onSelect?.();
      }}
    />
  );
});

export const MenuLabel = forwardRef<HTMLDivElement, TMenuLabelProps>(
  function MenuLabel(props, ref) {
    return <StyledMenuLabel {...props} ref={ref} />;
  },
);

export const MenuSeparator = forwardRef<HTMLDivElement, TMenuSeparatorProps>(
  function MenuSeparator(props, ref) {
    return <StyledMenuSeparator {...props} ref={ref} />;
  },
);
