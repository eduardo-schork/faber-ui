import {
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';

export const RadioGroupRoot = styled.fieldset.attrs({ className: 'faber-ui-radio-group' })`
  display: grid;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

export const RadioGroupLabel = styled.legend.attrs({ className: 'faber-ui-radio-group-label' })`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const RadioGroupOptions = styled(VFlex).attrs({
  className: 'faber-ui-radio-group-options',
  gap: 'XS',
})``;

export const RadioGroupMessage = styled(Text.P).attrs({
  className: 'faber-ui-radio-group-message',
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
})``;

export const RadioGroupError = styled(RadioGroupMessage).attrs({
  className: 'faber-ui-radio-group-error',
})`
  color: ${COLORS.ERROR};
`;
