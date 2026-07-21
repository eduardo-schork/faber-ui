import { BORDER_WIDTHS } from '../border-widths';

export const TEXT_DECORATIONS = {
  UNDERLINE_OFFSET: '0.18em',
  UNDERLINE_WIDTH: BORDER_WIDTHS.DEFAULT,
} as const;

export type TTextDecorationTokenName = keyof typeof TEXT_DECORATIONS;
export type TTextDecorationTokenValue = (typeof TEXT_DECORATIONS)[TTextDecorationTokenName];
