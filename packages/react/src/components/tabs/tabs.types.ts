import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TTabsProps = Omit<ComponentPropsWithoutRef<'div'>, 'defaultValue' | 'onChange'> & {
  readonly children: ReactNode;
  /** The tab selected on first render when the component is uncontrolled. */
  readonly defaultValue?: string;
  readonly onValueChange?: (value: string) => void;
  /** The selected tab. Provide it together with `onValueChange` to control the component. */
  readonly value?: string;
};

export type TTabListProps = ComponentPropsWithoutRef<'div'> & {
  /** Names the set of tabs for assistive technology. */
  readonly 'aria-label': string;
};

export type TTabProps = Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'value'> & {
  readonly value: string;
};

export type TTabPanelProps = ComponentPropsWithoutRef<'div'> & {
  readonly value: string;
};
