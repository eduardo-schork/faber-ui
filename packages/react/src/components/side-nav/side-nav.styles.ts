import { COLORS, FONT_FAMILIES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { VFlex } from '../flex';
import { Text } from '../text';

export const StyledSideNav = styled.nav.attrs({ className: 'faber-ui-side-nav' })`
  display: flex;
  flex-direction: column;
  gap: ${SPACINGS.LG};
  min-width: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
`;

/* Links stretch to the width of the group so the whole row is the target. */
export const StyledSideNavGroup = styled(VFlex).attrs({
  className: 'faber-ui-side-nav-group',
  gap: 'XXS',
})``;

export const SideNavLabel = styled(Text.Overline).attrs({
  className: 'faber-ui-side-nav-label',
})`
  padding: ${SPACINGS.NONE} ${SPACINGS.XS} ${SPACINGS.XXS};
`;
