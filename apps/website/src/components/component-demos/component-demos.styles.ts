import {
  BORDER_WIDTHS,
  CenterFlex,
  COLORS,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const DemoStack = styled.div`
  display: grid;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};
`;

export const DemoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${SPACINGS.SM};
`;

/** A neutral block that stands in for content in layout examples. */
export const DemoBox = styled.div`
  ${captionText}
  padding: ${SPACINGS.XS} ${SPACINGS.SM};
  border-radius: ${RADII.SM};
  color: ${COLORS.TEXT_SECONDARY};
  background: ${COLORS.DISABLED_BACKGROUND};
`;

export const DemoCanvas = styled.div`
  padding-block: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};
`;

export const DemoNote = styled.p`
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

export const DemoMedia = styled.div`
  display: flex;
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

export const DemoFocusZone = styled.div`
  display: grid;
  justify-items: start;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};
`;
