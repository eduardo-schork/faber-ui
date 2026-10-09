import { COLORS, FONT_WEIGHTS, LETTER_SPACINGS, LINE_HEIGHTS, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { HFlex, VFlex } from '../flex';
import { Text } from '../text';
import { STAT_TRENDS } from './stat.constants';

export const StatRoot = styled(VFlex).attrs({ className: 'faber-ui-stat' })`
  gap: ${SPACINGS.XXS};
  min-width: ${SPACINGS.NONE};
`;

export const StatLabel = styled(Text.Span).attrs({ className: 'faber-ui-stat-label' })``;

export const StatFigure = styled(HFlex).attrs({ className: 'faber-ui-stat-figure' })`
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${SPACINGS.XXS} ${SPACINGS.XS};
`;

export const StatValue = styled(Text.Strong).attrs({ className: 'faber-ui-stat-value' })`
  font-variant-numeric: tabular-nums;
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  letter-spacing: ${LETTER_SPACINGS.TIGHT};
  line-height: ${LINE_HEIGHTS.TIGHT};
`;

export const StatChange = styled(Text.Span).attrs({ className: 'faber-ui-stat-change' })`
  color: ${COLORS.TEXT_SECONDARY};
  font-variant-numeric: tabular-nums;

  &[data-trend='${STAT_TRENDS.POSITIVE}'] {
    color: ${COLORS.PRIMARY};
  }

  &[data-trend='${STAT_TRENDS.NEGATIVE}'] {
    color: ${COLORS.ERROR};
  }
`;

export const StatHelper = styled(Text.Span).attrs({ className: 'faber-ui-stat-helper' })``;
