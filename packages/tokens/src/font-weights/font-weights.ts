import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const FONT_WEIGHT_SCALE = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
} as const;

/** What styles consume: each entry is `var(--faber-ui-font-weight-<name>, <raw value>)`. */
export const FONT_WEIGHTS = /* @__PURE__ */ createTokenVariables('font-weight', FONT_WEIGHT_SCALE);

export type TFontWeightTokenName = keyof typeof FONT_WEIGHTS;
export type TFontWeightTokenValue = (typeof FONT_WEIGHTS)[TFontWeightTokenName];
export type TFontWeightScaleValue = (typeof FONT_WEIGHT_SCALE)[TFontWeightTokenName];
