export const PALETTE = {
  BLACK: '#000000',
  WHITE: '#ffffff',

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

  MALACHITE_100: 'hsl(145 58% 61%)',
  MALACHITE_200: 'hsl(145 52% 52%)',
  MALACHITE_300: 'hsl(146 50% 42%)',
  MALACHITE_400: 'hsl(147 57% 33%)',
  MALACHITE_500: 'hsl(148 61% 25%)',
  MALACHITE_600: 'hsl(149 66% 17%)',

  COPPER_100: 'hsl(14 100% 70%)',
  COPPER_200: 'hsl(13 89% 62%)',
  COPPER_300: 'hsl(12 79% 55%)',
  COPPER_400: 'hsl(11 70% 48%)',
  COPPER_500: 'hsl(10 74% 39%)',
  COPPER_600: 'hsl(9 79% 30%)',

  RED_100: 'hsl(4 90% 76%)',
  RED_400: 'hsl(4 75% 42%)',
} as const;

export type TPaletteTokenName = keyof typeof PALETTE;
export type TPaletteTokenValue = (typeof PALETTE)[TPaletteTokenName];
