import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the number or length itself. */
export const BORDER_WIDTH_SCALE = {
  NONE: '0px',
  DEFAULT: '1px',
  STRONG: '2px',
} as const;

/** What styles consume: each entry is `var(--faber-ui-border-width-<name>, <raw value>)`. */
export const BORDER_WIDTHS = /* @__PURE__ */ createTokenVariables(
  'border-width',
  BORDER_WIDTH_SCALE,
);

export type TBorderWidthTokenName = keyof typeof BORDER_WIDTHS;
export type TBorderWidthTokenValue = (typeof BORDER_WIDTHS)[TBorderWidthTokenName];
export type TBorderWidthScaleValue = (typeof BORDER_WIDTH_SCALE)[TBorderWidthTokenName];
