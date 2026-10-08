import { BORDER_WIDTHS, COLORS, RADII, SIZES, SPACINGS } from '@faber-ui/tokens';
import styled from 'styled-components';

import { Box } from '../box';
import { HFlex } from '../flex';
import { Text } from '../text';
import { COLOR_SWATCH_ORIENTATIONS } from './color-swatch.constants';

export const ColorSwatchRoot = styled(HFlex).attrs({ className: 'faber-ui-color-swatch' })`
  align-items: center;
  gap: ${SPACINGS.XS} ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};

  &[data-orientation='${COLOR_SWATCH_ORIENTATIONS.VERTICAL}'] {
    flex-direction: column;
    align-items: stretch;
  }
`;

/* The border keeps a sample visible when its color matches the surface behind it. */
export const ColorSwatchSample = styled(Box).attrs({
  className: 'faber-ui-color-swatch-sample',
  forwardedAs: 'span',
})`
  flex: none;
  width: ${SIZES.XS};
  height: ${SIZES.XS};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.SM};

  [data-orientation='${COLOR_SWATCH_ORIENTATIONS.VERTICAL}'] > & {
    width: auto;
    height: ${SIZES.LG};
  }
`;

export const ColorSwatchLabel = styled(Text.Span).attrs({
  className: 'faber-ui-color-swatch-label',
})`
  flex: 1;
  min-width: ${SPACINGS.NONE};
`;

export const ColorSwatchValue = styled(Text.Span).attrs({
  className: 'faber-ui-color-swatch-value',
})`
  min-width: ${SPACINGS.NONE};
`;
