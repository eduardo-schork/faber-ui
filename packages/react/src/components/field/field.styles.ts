import { COLORS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { riseInStyles } from '../../internal/motion-styles';
import { VFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';

export const FieldRoot = styled(VFlex).attrs({ className: 'faber-ui-field', gap: 'XXS' })``;

export const FieldLabel = styled(Text.Label).attrs({ className: 'faber-ui-field-label' })``;

export const FieldDescription = styled(Text.P).attrs({
  className: 'faber-ui-field-description',
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
})``;

export const FieldError = styled(Text.P).attrs({
  className: 'faber-ui-field-error',
  size: TYPOGRAPHY_SIZES.SMALLER,
})`
  color: ${COLORS.ERROR};

  ${riseInStyles}
`;
