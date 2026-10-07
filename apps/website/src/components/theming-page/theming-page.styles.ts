import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  COLORS,
  FONT_WEIGHTS,
  RADII,
  SPACINGS,
  Table,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const LayerTable = styled(Table)`
  thead th {
    ${captionText}
    border-bottom-color: ${COLORS.BORDER_STRONG};
    color: ${COLORS.TEXT_SECONDARY};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  tbody th {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  td {
    color: ${COLORS.TEXT_SECONDARY};
  }

  td:last-child {
    ${captionText}
    color: ${COLORS.TEXT_PRIMARY};
  }

  @media (max-width: ${BREAKPOINTS.TABLET}) {
    thead {
      display: none;
    }

    tr {
      display: grid;
      gap: ${SPACINGS.XXS};
      padding-block: ${SPACINGS.SM};
      border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
    }

    th,
    td {
      padding: ${SPACINGS.NONE};
      border-bottom: ${BORDER_WIDTHS.NONE};
    }
  }
`;

export const DemoToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM};
`;

/** Paints the theme of the nearest provider, so a scoped theme is visible as a region. */
export const ThemedSurface = styled.div`
  display: grid;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.LG};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.BACKGROUND_PRIMARY};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const FontScope = styled.div`
  display: grid;
  gap: ${SPACINGS.MD};
`;
