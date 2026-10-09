import { forwardRef } from 'react';

import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import { STAT_TRENDS } from './stat.constants';
import { StatChange, StatFigure, StatHelper, StatLabel, StatRoot, StatValue } from './stat.styles';
import type { TStatProps } from './stat.types';

export const Stat = forwardRef<HTMLDivElement, TStatProps>(function Stat(
  { change, helper, label, trend = STAT_TRENDS.NEUTRAL, value, ...rootProps },
  ref,
) {
  return (
    <StatRoot {...rootProps} ref={ref}>
      <StatLabel size={TYPOGRAPHY_SIZES.SMALLER} tone={TYPOGRAPHY_TONES.SECONDARY}>
        {label}
      </StatLabel>
      <StatFigure>
        <StatValue size={TYPOGRAPHY_SIZES.LARGEST}>{value}</StatValue>
        {change === undefined ? null : (
          <StatChange
            data-trend={trend}
            size={TYPOGRAPHY_SIZES.SMALLER}
            tone={TYPOGRAPHY_TONES.INHERIT}
            weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}
          >
            {change}
          </StatChange>
        )}
      </StatFigure>
      {helper === undefined ? null : (
        <StatHelper size={TYPOGRAPHY_SIZES.SMALLEST} tone={TYPOGRAPHY_TONES.SECONDARY}>
          {helper}
        </StatHelper>
      )}
    </StatRoot>
  );
});
