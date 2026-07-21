export const FONT_FAMILIES = {
  BASE: "var(--faber-ui-font-family-base, 'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', Arial, sans-serif)",
} as const;

export type TFontFamilyTokenName = keyof typeof FONT_FAMILIES;
export type TFontFamilyTokenValue = (typeof FONT_FAMILIES)[TFontFamilyTokenName];
