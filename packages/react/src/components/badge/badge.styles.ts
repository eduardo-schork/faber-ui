import {
  BORDER_WIDTHS,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  OPACITIES,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { BADGE_COLORS } from './badge.constants';

export const StyledBadge = styled.span.attrs({ className: 'faber-ui-badge' })`
  --badge-color: ${COLORS.TEXT_SECONDARY};

  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: ${SPACINGS.XXS} ${SPACINGS.XS};
  border: ${BORDER_WIDTHS.DEFAULT} solid
    color-mix(in srgb, var(--badge-color) ${OPACITIES.INTERACTION_LIGHT_ACTIVE}, transparent);
  border-radius: ${RADII.FULL};
  /* Leans toward the text color so the label stays readable on the tint in both themes. */
  color: color-mix(in srgb, var(--badge-color) ${OPACITIES.TEXT_ON_TINT}, ${COLORS.TEXT_PRIMARY});
  background-color: color-mix(
    in srgb,
    var(--badge-color) ${OPACITIES.INTERACTION_LIGHT},
    transparent
  );
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.XS};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NONE};
  white-space: nowrap;

  &[data-color='${BADGE_COLORS.PRIMARY}'] {
    --badge-color: ${COLORS.PRIMARY};
  }

  &[data-color='${BADGE_COLORS.ACCENT}'] {
    --badge-color: ${COLORS.ACCENT};
  }
`;
