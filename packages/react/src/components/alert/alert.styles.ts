import {
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_WEIGHTS } from '../typography/typography.constants';
import { ALERT_COLORS } from './alert.constants';

export const StyledAlert = styled(VFlex).attrs({ className: 'faber-ui-alert', gap: 'XXS' })`
  --alert-color: ${COLORS.BORDER_STRONG};

  box-sizing: border-box;
  padding: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-inline-start: ${BORDER_WIDTHS.STRONG} solid var(--alert-color);
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-color='${ALERT_COLORS.PRIMARY}'] {
    --alert-color: ${COLORS.PRIMARY};
  }

  &[data-color='${ALERT_COLORS.ACCENT}'] {
    --alert-color: ${COLORS.ACCENT};
  }

  &[data-color='${ALERT_COLORS.ERROR}'] {
    --alert-color: ${COLORS.ERROR};
  }
`;

export const AlertTitle = styled(Text.Span).attrs({
  className: 'faber-ui-alert-title',
  size: TYPOGRAPHY_SIZES.SMALLER,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
})``;

export const AlertBody = styled.div.attrs({ className: 'faber-ui-alert-body' })`
  color: ${COLORS.TEXT_SECONDARY};
`;
