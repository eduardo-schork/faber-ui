import { BORDER_WIDTHS, BREAKPOINTS, COLORS, Grid, HFlex, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

export const Plate = styled(Grid).attrs({ forwardedAs: 'article' })`
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
  padding-top: ${SPACINGS.XL};

  & + & {
    margin-top: ${SPACINGS.LG};
    border-top: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_DEFAULT};
  }
`;

export const PlateHead = styled(HFlex).attrs({ forwardedAs: 'header' })`
  flex-wrap: wrap;
  align-items: baseline;
  gap: ${SPACINGS.XXS} ${SPACINGS.MD};
`;

export const PlateBody = styled(Grid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: ${SPACINGS.MD};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PlateFoot = styled(HFlex).attrs({ forwardedAs: 'footer' })`
  flex-wrap: wrap;
  align-items: center;
  gap: ${SPACINGS.XXS} ${SPACINGS.LG};
  font-size: 0.875em;

  > :last-child {
    margin-inline-start: auto;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    > :last-child {
      margin-inline-start: ${SPACINGS.NONE};
    }
  }
`;
