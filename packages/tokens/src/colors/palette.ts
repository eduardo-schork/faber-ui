export const PALETTE = {
  BLACK: '#000000',
  WHITE: '#ffffff',

  /* Translucent darks laid over the page behind a modal. */
  OVERLAY_400: 'hsl(200 16% 8% / 48%)',
  OVERLAY_800: 'hsl(200 30% 2% / 78%)',

  NEUTRAL_50: 'hsl(200 14% 96%)',
  NEUTRAL_100: 'hsl(200 12% 93%)',
  NEUTRAL_200: 'hsl(200 10% 87%)',
  NEUTRAL_300: 'hsl(200 9% 72%)',
  NEUTRAL_400: 'hsl(200 8% 58%)',
  NEUTRAL_500: 'hsl(200 8% 45%)',
  NEUTRAL_600: 'hsl(200 9% 34%)',
  NEUTRAL_700: 'hsl(200 11% 25%)',
  NEUTRAL_800: 'hsl(200 13% 18%)',
  NEUTRAL_900: 'hsl(200 15% 12%)',
  NEUTRAL_950: 'hsl(200 16% 8%)',

  AMETHYST_100: 'hsl(263 80% 68%)',
  AMETHYST_200: 'hsl(263 80% 61%)',
  AMETHYST_300: 'hsl(263 80% 55%)',
  AMETHYST_400: 'hsl(270 50% 38%)',
  AMETHYST_500: 'hsl(270 52% 32%)',
  AMETHYST_600: 'hsl(270 54% 27%)',

  OBSIDIAN_100: 'hsl(240 10% 80%)',
  OBSIDIAN_200: 'hsl(240 10% 72%)',
  OBSIDIAN_300: 'hsl(240 10% 64%)',
  OBSIDIAN_400: 'hsl(240 12% 20%)',
  OBSIDIAN_500: 'hsl(240 14% 14%)',
  OBSIDIAN_600: 'hsl(240 16% 9%)',

  RED_100: 'hsl(4 90% 76%)',
  RED_400: 'hsl(4 75% 42%)',
} as const;

export type TPaletteTokenName = keyof typeof PALETTE;
export type TPaletteTokenValue = (typeof PALETTE)[TPaletteTokenName];
