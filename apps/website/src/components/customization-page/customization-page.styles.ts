import {
  AlertRoot,
  BORDER_WIDTHS,
  BREAKPOINTS,
  CARD_PADDINGS,
  COLORS,
  Card,
  DialogBody,
  FLEX_ALIGNS,
  FLEX_JUSTIFIES,
  FLEX_WRAPS,
  FONT_SIZES,
  Grid,
  HFlex,
  LIST_MARKERS,
  List,
  RADII,
  SIZES,
  SPACINGS,
  Textarea,
  VFlex,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';

export const DemoToolbar = styled(HFlex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM};
`;

/** Paints the theme of the nearest provider, so a scoped theme is visible as a region. */
export const ThemedSurface = styled(Grid)`
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

export const PlaygroundGrid = styled(Grid)`
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const EditorColumn = styled(Grid)`
  position: sticky;
  top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    position: static;
  }
`;

export const PresetList = styled(HFlex)`
  flex-wrap: wrap;
  gap: ${SPACINGS.XS};
`;

export const StylesheetEditor = styled(Textarea)`
  min-height: calc(${SIZES.XXL} * 4.5);
  font-size: ${FONT_SIZES.SM};
  line-height: 1.6;
  tab-size: 2;
  white-space: pre;
`;

export const PreviewCard = styled(Card).attrs({ padding: CARD_PADDINGS.NONE })`
  overflow: hidden;
`;

export const PreviewHead = styled(HFlex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.SM} ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

/** Paints the theme of the surrounding provider so the preview reads as its own region. */
export const PreviewSurface = styled(Grid)`
  gap: ${SPACINGS.LG};
  padding: ${SPACINGS.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.BACKGROUND_PRIMARY};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const ReferenceList = styled(List).attrs({ marker: LIST_MARKERS.NONE })`
  ${captionText}
  grid-template-columns: repeat(auto-fill, minmax(calc(${SIZES.XXL} * 3), 1fr));
  gap: ${SPACINGS.XXS} ${SPACINGS.MD};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
  overflow-wrap: anywhere;
`;

export const DemoControls = styled(HFlex).attrs({ gap: 'MD', wrap: FLEX_WRAPS.WRAP })``;

export const DemoStage = styled(HFlex).attrs({
  align: FLEX_ALIGNS.CENTER,
  gap: 'SM',
  justify: FLEX_JUSTIFIES.CENTER,
  wrap: FLEX_WRAPS.WRAP,
})`
  min-height: ${SIZES.XXL};
`;

/* A consumer component: a library Card restyled with nothing but tokens. */
export const PlanCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${SPACINGS.SM};
  border-color: ${COLORS.PRIMARY};
  border-radius: ${RADII.XL};
  box-shadow: ${SPACINGS.XXS} ${SPACINGS.XXS} ${SPACINGS.NONE} ${COLORS.PRIMARY};
`;

export const PlanCardHeader = styled(HFlex).attrs({
  align: FLEX_ALIGNS.CENTER,
  gap: 'SM',
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})``;

/* The alert surface laid out as a row, with an action next to the message. */
export const ActionAlertRoot = styled(AlertRoot)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.MD};
`;

export const ActionAlertMessage = styled(VFlex).attrs({ gap: 'XXS' })`
  flex: 1;
`;

export const SheetBody = styled(DialogBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACINGS.SM};
  padding-block: ${SPACINGS.XL};
  text-align: center;
`;

export const SheetMark = styled(HFlex).attrs({
  align: FLEX_ALIGNS.CENTER,
  justify: FLEX_JUSTIFIES.CENTER,
})`
  width: ${SIZES.LG};
  height: ${SIZES.LG};
  border: ${BORDER_WIDTHS.STRONG} solid ${COLORS.ACCENT};
  border-radius: ${RADII.FULL};
  color: ${COLORS.ACCENT};
`;

export const SheetActions = styled(VFlex).attrs({ gap: 'XS' })`
  padding: ${SPACINGS.NONE} ${SPACINGS.LG} ${SPACINGS.LG};
`;

export const SheetCorner = styled(HFlex).attrs({ justify: FLEX_JUSTIFIES.END })`
  padding: ${SPACINGS.SM} ${SPACINGS.SM} ${SPACINGS.NONE};
`;
