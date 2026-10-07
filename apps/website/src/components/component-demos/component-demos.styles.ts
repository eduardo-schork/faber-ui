import {
  BORDER_WIDTHS,
  Box,
  COLORS,
  CenterFlex,
  FONT_SIZES,
  FONT_WEIGHTS,
  Grid,
  HFlex,
  RADII,
  SIZES,
  SPACINGS,
  Text,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const DemoStack = styled(Grid)`
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
`;

export const DemoRow = styled(HFlex)`
  flex-wrap: wrap;
  align-items: center;
  gap: ${SPACINGS.SM};
`;

/** A neutral block that stands in for content in layout examples. */
export const DemoBox = styled(Box)`
  ${captionText}
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
  border-radius: ${RADII.SM};
  color: ${COLORS.TEXT_SECONDARY};
  background: ${COLORS.DISABLED_BACKGROUND};
`;

export const DemoCanvas = styled(Box)`
  padding-block: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};
`;

export const DemoNote = styled(Text.P)`
  ${captionText}
  margin: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
`;

export const DemoFieldset = styled.fieldset`
  display: grid;
  gap: ${SPACINGS.XS};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border: ${BORDER_WIDTHS.NONE};

  legend {
    margin-bottom: ${SPACINGS.XS};
    padding: ${SPACINGS.NONE};
    font-size: ${FONT_SIZES.SM};
    font-weight: ${FONT_WEIGHTS.MEDIUM};
  }
`;

export const DemoCentered = styled(CenterFlex)`
  min-height: calc(${SIZES.XXL} * 1.5);
`;

export const DemoMedia = styled(HFlex)`
  align-items: center;
  gap: ${SPACINGS.SM};
  min-height: ${SIZES.LG};

  > :last-child {
    display: grid;
    flex: 1;
    gap: ${SPACINGS.XS};
    min-width: ${SPACINGS.NONE};
  }
`;

export const DemoFocusZone = styled(Grid)`
  justify-items: start;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};
`;
