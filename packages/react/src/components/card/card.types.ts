import type { ComponentPropsWithoutRef, ElementType } from 'react';

import type { TCardPadding } from './card.constants';

export type TCardProps = ComponentPropsWithoutRef<'div'> & {
  readonly as?: ElementType;
  readonly padding?: TCardPadding;
};
