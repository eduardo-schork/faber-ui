import {
  AlertRoot,
  BORDER_WIDTHS,
  Card,
  COLORS,
  DialogBody,
  FieldDescription,
  FLEX_ALIGNS,
  FLEX_JUSTIFIES,
  FLEX_WRAPS,
  HFlex,
  RADII,
  SIZES,
  SPACINGS,
  VFlex,
} from '@faber-ui/react';
import styled from 'styled-components';

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

export const FieldFooter = styled(HFlex).attrs({
  gap: 'SM',
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})``;

export const FieldCounter = styled(FieldDescription)`
  flex: none;
  font-variant-numeric: tabular-nums;
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
