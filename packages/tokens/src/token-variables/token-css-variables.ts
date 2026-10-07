import { BORDER_WIDTH_SCALE } from '../border-widths';
import { FONT_SIZE_SCALE } from '../font-sizes';
import { FONT_WEIGHT_SCALE } from '../font-weights';
import { LINE_HEIGHT_SCALE } from '../line-heights';
import { RADIUS_SCALE } from '../radii';
import { SIZE_SCALE } from '../sizes';
import { SPACING_SCALE } from '../spacings';
import { getTokenVariableName, type TTokenScale } from './create-token-variables';

/** The scales exposed as CSS custom properties, keyed by the prefix of their variable names. */
export const TOKEN_VARIABLE_SCALES = {
  spacing: SPACING_SCALE,
  size: SIZE_SCALE,
  radius: RADIUS_SCALE,
  'border-width': BORDER_WIDTH_SCALE,
  'font-size': FONT_SIZE_SCALE,
  'font-weight': FONT_WEIGHT_SCALE,
  'line-height': LINE_HEIGHT_SCALE,
} as const satisfies Readonly<Record<string, TTokenScale>>;

export type TTokenCSSVariables = Readonly<Record<`--faber-ui-${string}`, string>>;

/** Every dimensional and typographic token as a `--faber-ui-*` declaration with its raw value. */
export const createTokenCSSVariables = (): TTokenCSSVariables =>
  Object.fromEntries(
    Object.entries(TOKEN_VARIABLE_SCALES).flatMap(([prefix, scale]) =>
      Object.entries(scale).map(([name, value]) => [
        getTokenVariableName(prefix, name),
        String(value),
      ]),
    ),
  );
