import {
  BORDER_WIDTHS,
  COLORS,
  CONTAINER_SIZES,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { Box } from '../box';
import { FLEX_ALIGNS, FLEX_JUSTIFIES, FLEX_WRAPS, HFlex } from '../flex';
import { Title } from '../title';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_WEIGHTS } from '../typography/typography.constants';
import { DIALOG_PLACEMENTS } from './dialog.constants';

export const StyledDialog = styled.dialog.attrs({ className: 'faber-ui-dialog' })`
  box-sizing: border-box;
  width: calc(100% - ${SPACINGS.XL});
  max-width: calc(${CONTAINER_SIZES.SMALL} * 0.75);
  max-height: calc(100% - ${SPACINGS.XL});
  padding: ${SPACINGS.NONE};
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};

  &[open] {
    display: flex;
    flex-direction: column;
  }

  &::backdrop {
    background-color: color-mix(in srgb, ${COLORS.TEXT_PRIMARY} ${OPACITIES.SKELETON}, transparent);
  }

  &[data-placement='${DIALOG_PLACEMENTS.START}'],
  &[data-placement='${DIALOG_PLACEMENTS.END}'] {
    width: calc(100% - ${SIZES.LG});
    max-width: calc(${CONTAINER_SIZES.SMALL} * 0.6);
    height: 100%;
    max-height: 100%;
    margin-block: ${SPACINGS.NONE};
    border-block: ${BORDER_WIDTHS.NONE};
    border-radius: ${RADII.NONE};
  }

  &[data-placement='${DIALOG_PLACEMENTS.START}'] {
    margin-inline: ${SPACINGS.NONE} auto;
    border-inline-start: ${BORDER_WIDTHS.NONE};
  }

  &[data-placement='${DIALOG_PLACEMENTS.END}'] {
    margin-inline: auto ${SPACINGS.NONE};
    border-inline-end: ${BORDER_WIDTHS.NONE};
  }
`;

export const DialogHeader = styled(HFlex).attrs({
  className: 'faber-ui-dialog-header',
  align: FLEX_ALIGNS.CENTER,
  gap: 'MD',
  justify: FLEX_JUSTIFIES.SPACE_BETWEEN,
})`
  flex: none;
  padding: ${SPACINGS.MD} ${SPACINGS.MD} ${SPACINGS.MD} ${SPACINGS.LG};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const StyledDialogTitle = styled(Title.H2).attrs({
  className: 'faber-ui-dialog-title',
  size: TYPOGRAPHY_SIZES.MEDIUM,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
})``;

export const DialogBody = styled(Box).attrs({ className: 'faber-ui-dialog-body' })`
  flex: 1;
  padding: ${SPACINGS.LG};
  overflow-y: auto;
  color: ${COLORS.TEXT_SECONDARY};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};
`;

export const DialogFooter = styled(HFlex).attrs({
  className: 'faber-ui-dialog-footer',
  gap: 'SM',
  justify: FLEX_JUSTIFIES.END,
  wrap: FLEX_WRAPS.WRAP,
})`
  flex: none;
  padding: ${SPACINGS.MD} ${SPACINGS.LG};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;
