import { BORDER_WIDTHS, COLORS, FOCUS_RINGS, OPACITIES, SPACINGS } from '@faber-ui/tokens';
import { css } from 'styled-components';

/** How much the border grows on focus; the padding gives the same amount back. */
export const FIELD_FOCUS_GROWTH = `(${FOCUS_RINGS.FIELD_BORDER_WIDTH} - ${BORDER_WIDTHS.DEFAULT})`;

const FOCUS_COLOR = `var(--field-focus-color, ${COLORS.PRIMARY})`;

/**
 * Focus for text fields: the border thickens slightly and takes the primary color, with a faint
 * halo of the same color around it. An invalid field sets `--field-focus-color` to the error color.
 */
/** The focused look on its own, for a wrapper that marks focus on behalf of the input inside it. */
export const fieldFocusDeclarations = css`
  border-width: ${FOCUS_RINGS.FIELD_BORDER_WIDTH};
  border-color: ${FOCUS_COLOR};
  outline: none;
  box-shadow: ${SPACINGS.NONE} ${SPACINGS.NONE} ${SPACINGS.NONE} ${FOCUS_RINGS.HALO_WIDTH}
    color-mix(in srgb, ${FOCUS_COLOR} ${OPACITIES.INTERACTION_LIGHT}, transparent);
`;

export const fieldFocusStyles = css`
  &:focus-visible {
    ${fieldFocusDeclarations}
  }

  &[aria-invalid='true']:not(:disabled) {
    --field-focus-color: ${COLORS.ERROR};
  }

  /* Forced colors drop shadows, so the system outline marks focus there. */
  @media (forced-colors: active) {
    &:focus-visible {
      outline: ${FOCUS_RINGS.WIDTH} solid;
    }
  }
`;
