import {
  BORDER_WIDTHS,
  COLORS,
  CONTAINER_SIZES,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  RADII,
  SPACINGS,
  Z_INDICES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { FLEX_ALIGNS, HFlex, VFlex } from '../flex';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES, TYPOGRAPHY_WEIGHTS } from '../typography/typography.constants';
import { TOAST_COLORS } from './toast.constants';

export const StyledToastViewport = styled(VFlex).attrs({
  className: 'faber-ui-toast-viewport',
  gap: 'XS',
})`
  position: fixed;
  z-index: ${Z_INDICES.TOAST};
  inset-block-end: ${SPACINGS.NONE};
  inset-inline-end: ${SPACINGS.NONE};
  box-sizing: border-box;
  width: 100%;
  max-width: calc(${CONTAINER_SIZES.SMALL} * 0.55);
  padding: ${SPACINGS.MD};
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`;

export const StyledToast = styled(HFlex).attrs({
  className: 'faber-ui-toast',
  align: FLEX_ALIGNS.START,
  gap: 'SM',
})`
  --toast-color: ${COLORS.BORDER_STRONG};

  box-sizing: border-box;
  padding: ${SPACINGS.SM} ${SPACINGS.SM} ${SPACINGS.SM} ${SPACINGS.MD};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
  border-inline-start: ${BORDER_WIDTHS.STRONG} solid var(--toast-color);
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-color='${TOAST_COLORS.PRIMARY}'] {
    --toast-color: ${COLORS.PRIMARY};
  }

  &[data-color='${TOAST_COLORS.ACCENT}'] {
    --toast-color: ${COLORS.ACCENT};
  }

  &[data-color='${TOAST_COLORS.ERROR}'] {
    --toast-color: ${COLORS.ERROR};
  }
`;

export const ToastContent = styled(VFlex).attrs({ className: 'faber-ui-toast-content' })`
  flex: 1;
  padding-block: ${SPACINGS.XXS};
`;

export const ToastTitle = styled(Text.Span).attrs({
  className: 'faber-ui-toast-title',
  size: TYPOGRAPHY_SIZES.SMALLER,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
})``;

export const ToastBody = styled.div.attrs({ className: 'faber-ui-toast-body' })`
  color: ${COLORS.TEXT_SECONDARY};
`;
