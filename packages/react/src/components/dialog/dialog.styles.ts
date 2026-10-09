import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  CONTAINER_SIZES,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SHADOWS,
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
  box-shadow: ${SHADOWS.LG};
  font-family: ${FONT_FAMILIES.BASE};

  /* Closed is the resting state the dialog transitions from and back to. Where the browser cannot
     transition \`display\` and \`overlay\`, it opens and closes at once. */
  opacity: ${OPACITIES.HIDDEN};
  transform: scale(${ANIMATIONS.SCALE_ENTER});
  transition:
    opacity ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_EXIT},
    transform ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_EXIT},
    overlay ${ANIMATIONS.DURATION_FAST} allow-discrete,
    display ${ANIMATIONS.DURATION_FAST} allow-discrete;

  &[open] {
    display: flex;
    flex-direction: column;
    opacity: ${OPACITIES.VISIBLE};
    transform: none;
    transition-duration: ${ANIMATIONS.DURATION_MODERATE};
    transition-timing-function: ${ANIMATIONS.EASING_ENTER};

    @starting-style {
      opacity: ${OPACITIES.HIDDEN};
      transform: scale(${ANIMATIONS.SCALE_ENTER});
    }
  }

  &::backdrop {
    opacity: ${OPACITIES.HIDDEN};
    background-color: ${COLORS.OVERLAY};
    transition:
      opacity ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
      overlay ${ANIMATIONS.DURATION_FAST} allow-discrete,
      display ${ANIMATIONS.DURATION_FAST} allow-discrete;
  }

  &[open]::backdrop {
    opacity: ${OPACITIES.VISIBLE};
    transition-duration: ${ANIMATIONS.DURATION_MODERATE};

    @starting-style {
      opacity: ${OPACITIES.HIDDEN};
    }
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

  /* A side panel slides in from its own edge instead of scaling; the edge mirrors with the
     writing direction. */
  &[data-placement='${DIALOG_PLACEMENTS.START}'],
  &:dir(rtl)[data-placement='${DIALOG_PLACEMENTS.END}'] {
    --dialog-slide: calc(100% * -1);
  }

  &[data-placement='${DIALOG_PLACEMENTS.END}'],
  &:dir(rtl)[data-placement='${DIALOG_PLACEMENTS.START}'] {
    --dialog-slide: 100%;
  }

  &[data-placement='${DIALOG_PLACEMENTS.START}']:not([open]),
  &[data-placement='${DIALOG_PLACEMENTS.END}']:not([open]) {
    transform: translateX(var(--dialog-slide));
  }

  &[data-placement='${DIALOG_PLACEMENTS.START}'][open],
  &[data-placement='${DIALOG_PLACEMENTS.END}'][open] {
    @starting-style {
      transform: translateX(var(--dialog-slide));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::backdrop {
      transition: none;
    }
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
