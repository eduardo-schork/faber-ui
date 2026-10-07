import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  RADII,
  SIZES,
  SPACINGS,
  Text,
} from '@faber-ui/react';
import styled from 'styled-components';

import { focusRing, captionText } from '@/components/sheet/sheet.styles';

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

export const MaterialButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.XS};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.SURFACE_PRIMARY};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  text-align: start;
  cursor: pointer;

  &[aria-pressed='true'] {
    border-color: ${COLORS.TEXT_PRIMARY};
    box-shadow: inset 0 0 0 ${BORDER_WIDTHS.DEFAULT} ${COLORS.TEXT_PRIMARY};
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${COLORS.BORDER_STRONG};
    }

    &[aria-pressed='true']:hover {
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  ${focusRing}

  &:focus-visible {
    border-radius: ${RADII.MD};
  }
`;

export const MaterialSwatch = styled(Box).attrs({ forwardedAs: 'span' })`
  flex: none;
  width: ${SIZES.SM};
  height: ${SIZES.SM};
  border-radius: ${RADII.SM};
  background: linear-gradient(135deg, var(--swatch-primary) 50%, var(--swatch-accent) 50%);
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
