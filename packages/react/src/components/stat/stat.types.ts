import type { ReactNode } from 'react';

import type { TVFlexProps } from '../flex';
import type { STAT_TRENDS } from './stat.constants';

export type TStatTrend = (typeof STAT_TRENDS)[keyof typeof STAT_TRENDS];

export type TStatProps = Omit<TVFlexProps, 'children'> & {
  /** How the value moved, such as "+12%". Write the sign or the direction in the text itself. */
  readonly change?: ReactNode;
  /** Context under the value, such as the period it covers. */
  readonly helper?: ReactNode;
  readonly label: ReactNode;
  /** Whether the change is good, bad, or neither. It only sets the color. Defaults to `neutral`. */
  readonly trend?: TStatTrend;
  readonly value: ReactNode;
};
