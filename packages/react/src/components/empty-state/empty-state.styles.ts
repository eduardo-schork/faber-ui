import { BORDER_WIDTHS, COLORS, RADII, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { Box } from '../box';
import { HFlex, VFlex } from '../flex';
import { Text } from '../text';
import { Title } from '../title';

export const EmptyStateRoot = styled(VFlex).attrs({ className: 'faber-ui-empty-state' })`
  align-items: center;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.XL} ${SPACINGS.LG};
  text-align: center;
`;

export const EmptyStateMedia = styled(Box).attrs({ className: 'faber-ui-empty-state-media' })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${SIZES.LG};
  height: ${SIZES.LG};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.FULL};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const EmptyStateTitle = styled(Title.H3).attrs({
  className: 'faber-ui-empty-state-title',
})``;

export const EmptyStateDescription = styled(Text.P).attrs({
  className: 'faber-ui-empty-state-description',
})`
  max-width: 48ch;
`;

export const EmptyStateActions = styled(HFlex).attrs({
  className: 'faber-ui-empty-state-actions',
})`
  flex-wrap: wrap;
  justify-content: center;
  gap: ${SPACINGS.XS};
  margin-top: ${SPACINGS.XS};
`;
