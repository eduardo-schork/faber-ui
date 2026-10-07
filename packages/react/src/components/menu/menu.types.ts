import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import type { TMenuAlignment, TMenuItemColor } from './menu.constants';

export type TMenuProps = {
  readonly align?: TMenuAlignment;
  /** `MenuItem`, `MenuLabel`, and `MenuSeparator` elements. */
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
  readonly onOpenChange?: (open: boolean) => void;
  readonly open?: boolean;
  /** The single button that opens the menu. It must forward its ref and props. */
  readonly trigger: ReactElement;
};

export type TMenuItemProps = Omit<ComponentPropsWithoutRef<'div'>, 'color' | 'onSelect'> & {
  readonly color?: TMenuItemColor;
  readonly disabled?: boolean;
  /** Called when the item is chosen with the pointer or the keyboard. */
  readonly onSelect?: () => void;
};

export type TMenuLabelProps = ComponentPropsWithoutRef<'div'>;

export type TMenuSeparatorProps = ComponentPropsWithoutRef<'div'>;
