import { createTokenVariables } from '../token-variables/create-token-variables';

/** The raw values. Read these when JavaScript needs the length itself. */
export const LETTER_SPACING_SCALE = {
  TIGHT: '-0.02em',
  NORMAL: '0em',
  WIDE: '0.08em',
} as const;

/** What styles consume: each entry is `var(--faber-ui-letter-spacing-<name>, <raw value>)`. */
export const LETTER_SPACINGS = /* @__PURE__ */ createTokenVariables(
  'letter-spacing',
  LETTER_SPACING_SCALE,
);

export type TLetterSpacingTokenName = keyof typeof LETTER_SPACINGS;
export type TLetterSpacingTokenValue = (typeof LETTER_SPACINGS)[TLetterSpacingTokenName];
export type TLetterSpacingScaleValue = (typeof LETTER_SPACING_SCALE)[TLetterSpacingTokenName];
