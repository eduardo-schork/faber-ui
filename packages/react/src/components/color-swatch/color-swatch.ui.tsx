import { forwardRef } from 'react';

import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import { COLOR_SWATCH_ORIENTATIONS } from './color-swatch.constants';
import {
  ColorSwatchLabel,
  ColorSwatchRoot,
  ColorSwatchSample,
  ColorSwatchValue,
} from './color-swatch.styles';
import type { TColorSwatchProps } from './color-swatch.types';

export const ColorSwatch = forwardRef<HTMLDivElement, TColorSwatchProps>(function ColorSwatch(
  { color, label, orientation = COLOR_SWATCH_ORIENTATIONS.HORIZONTAL, value, ...rootProps },
  ref,
) {
  return (
    <ColorSwatchRoot {...rootProps} ref={ref} data-orientation={orientation}>
      <ColorSwatchSample aria-hidden="true" style={{ background: color }} />
      {label === undefined ? null : (
        <ColorSwatchLabel size={TYPOGRAPHY_SIZES.SMALLER} weight={TYPOGRAPHY_WEIGHTS.SEMIBOLD}>
          {label}
        </ColorSwatchLabel>
      )}
      {value === undefined ? null : (
        <ColorSwatchValue size={TYPOGRAPHY_SIZES.SMALLEST} tone={TYPOGRAPHY_TONES.SECONDARY}>
          {value}
        </ColorSwatchValue>
      )}
    </ColorSwatchRoot>
  );
});
