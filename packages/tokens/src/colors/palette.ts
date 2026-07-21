export const PALETTE = {
  BLACK: '#000000',
  WHITE: '#ffffff',

  NEUTRAL_50: 'hsl(95 20% 98%)',
  NEUTRAL_100: 'hsl(95 14% 95%)',
  NEUTRAL_200: 'hsl(95 10% 90%)',
  NEUTRAL_300: 'hsl(95 8% 82%)',
  NEUTRAL_400: 'hsl(95 6% 70%)',
  NEUTRAL_500: 'hsl(95 5% 56%)',
  NEUTRAL_600: 'hsl(95 5% 43%)',
  NEUTRAL_700: 'hsl(95 6% 32%)',
  NEUTRAL_800: 'hsl(95 8% 22%)',
  NEUTRAL_900: 'hsl(95 10% 13%)',
  NEUTRAL_950: 'hsl(95 14% 7%)',

  GREEN_100: 'hsl(95 24% 51%)',
  GREEN_200: 'hsl(95 31% 43%)',
  GREEN_300: 'hsl(95 39% 34%)',
  GREEN_400: 'hsl(95 46% 26%)',
  GREEN_500: 'hsl(95 62% 17%)',
  GREEN_600: 'hsl(95 78% 7%)',

  PURPLE_100: 'hsl(297 15% 59%)',
  PURPLE_200: 'hsl(297 22% 51%)',
  PURPLE_300: 'hsl(297 30% 42%)',
  PURPLE_400: 'hsl(297 37% 34%)',
  PURPLE_500: 'hsl(298 58% 21%)',
  PURPLE_600: 'hsl(298 78% 7%)',
} as const;

export type TPaletteTokenName = keyof typeof PALETTE;
export type TPaletteTokenValue = (typeof PALETTE)[TPaletteTokenName];
