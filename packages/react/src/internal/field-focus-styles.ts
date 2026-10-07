import { BORDER_WIDTHS, COLORS, FOCUS_RINGS } from '@faber-ui/tokens';
import { css } from 'styled-components';

/** How much the border grows on focus; the padding gives the same amount back. */
export const FIELD_FOCUS_GROWTH = `(${FOCUS_RINGS.FIELD_BORDER_WIDTH} - ${BORDER_WIDTHS.DEFAULT})`;

/**
 * Focus for text fields: the border itself thickens slightly and takes a gradient of the primary
 * color, instead of a ring outside the control. The gradient is painted in the border box behind a
 * surface-colored layer that covers the padding box.
 */
export const fieldFocusStyles = css`
  &:focus-visible {
    border-width: ${FOCUS_RINGS.FIELD_BORDER_WIDTH};
    border-color: transparent;
    outline: none;
    background-image:
      linear-gradient(${COLORS.SURFACE_PRIMARY}, ${COLORS.SURFACE_PRIMARY}),
      linear-gradient(
        120deg,
        ${COLORS.PRIMARY_ACTIVE},
        ${COLORS.PRIMARY},
        color-mix(in srgb, ${COLORS.PRIMARY} 45%, ${COLORS.SURFACE_PRIMARY}),
        ${COLORS.PRIMARY}
      );
    background-clip: padding-box, border-box;
    background-origin: border-box;
  }

  &[aria-invalid='true']:not(:disabled):focus-visible {
    border-color: ${COLORS.ERROR};
    background-image: none;
  }

  /* Forced colors drop background images, so the system outline marks focus there. */
  @media (forced-colors: active) {
    &:focus-visible {
      outline: ${FOCUS_RINGS.WIDTH} solid;
    }
  }
`;
