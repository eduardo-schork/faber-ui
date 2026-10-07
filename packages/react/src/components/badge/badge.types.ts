import type { ComponentPropsWithoutRef } from 'react';

import type { TBadgeColor } from './badge.constants';

export type TBadgeProps = ComponentPropsWithoutRef<'span'> & {
  readonly color?: TBadgeColor;
};
