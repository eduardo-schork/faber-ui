import { BREAKPOINTS, COLORS, Grid, SPACINGS, Text } from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const RecastGrid = styled(Grid)`
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: start;
  gap: ${SPACINGS.XXL};

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: minmax(0, 1fr);
    gap: ${SPACINGS.XL};
  }
`;

export const RecastColumn = styled(Grid)`
  gap: ${SPACINGS.LG};
  min-width: ${SPACINGS.NONE};
`;

export const MaterialList = styled(Grid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${SPACINGS.XS};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const RecastNote = styled(Text.P)`
  ${captionText}
  max-width: 62ch;
  margin: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const SpecimenBody = styled(Grid)`
  gap: ${SPACINGS.LG};
  padding: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const SpecimenIdentity = styled(Grid)`
  flex: 1;
  min-width: ${SPACINGS.NONE};
`;
