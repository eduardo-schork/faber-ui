import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const LINE_HEIGHT_SCALE = {
  ZERO: 0,
  NONE: 1,
  TIGHT: 1.2,
  NORMAL: 1.5,
  RELAXED: 1.75,
} as const;

/** What styles consume: each entry is `var(--faber-ui-line-height-<name>, <raw value>)`. */
export const LINE_HEIGHTS = /* @__PURE__ */ createTokenVariables('line-height', LINE_HEIGHT_SCALE);

export type TLineHeightTokenName = keyof typeof LINE_HEIGHTS;
export type TLineHeightTokenValue = (typeof LINE_HEIGHTS)[TLineHeightTokenName];
export type TLineHeightScaleValue = (typeof LINE_HEIGHT_SCALE)[TLineHeightTokenName];
