import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TAccordionProps = ComponentPropsWithoutRef<'div'>;

export type TAccordionItemProps = Omit<ComponentPropsWithoutRef<'details'>, 'children'> & {
  readonly children: ReactNode;
  /** The always-visible heading that toggles the item. */
  readonly summary: ReactNode;
};
