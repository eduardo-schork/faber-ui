import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TRadioCardProps = Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'> & {
  /** Supporting text under the label. */
  readonly description?: ReactNode;
  readonly label: ReactNode;
  /** A visual shown before the text, such as an icon or a color swatch. */
  readonly media?: ReactNode;
  readonly name: string;
  readonly value: string;
};
