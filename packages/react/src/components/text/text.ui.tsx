import { createTypographyComponent } from '../typography/create-typography-component';
import {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';

export const TextP = createTypographyComponent<'p', HTMLParagraphElement>('p', 'Text.P', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  size: TYPOGRAPHY_SIZES.SMALL,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
});

export const TextSpan = createTypographyComponent<'span', HTMLSpanElement>('span', 'Text.Span', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  size: TYPOGRAPHY_SIZES.SMALL,
  tone: TYPOGRAPHY_TONES.INHERIT,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
});

export const TextA = createTypographyComponent<'a', HTMLAnchorElement>('a', 'Text.A', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  link: true,
  size: TYPOGRAPHY_SIZES.SMALL,
  tone: TYPOGRAPHY_TONES.ACCENT,
  weight: TYPOGRAPHY_WEIGHTS.MEDIUM,
});

export const TextLabel = createTypographyComponent<'label', HTMLLabelElement>(
  'label',
  'Text.Label',
  {
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
    size: TYPOGRAPHY_SIZES.SMALLER,
    tone: TYPOGRAPHY_TONES.PRIMARY,
    weight: TYPOGRAPHY_WEIGHTS.MEDIUM,
  },
);

export const TextStrong = createTypographyComponent<'strong', HTMLElement>(
  'strong',
  'Text.Strong',
  {
    lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
    size: TYPOGRAPHY_SIZES.SMALL,
    tone: TYPOGRAPHY_TONES.INHERIT,
    weight: TYPOGRAPHY_WEIGHTS.BOLD,
  },
);

export const TextEm = createTypographyComponent<'em', HTMLElement>('em', 'Text.Em', {
  italic: true,
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  size: TYPOGRAPHY_SIZES.SMALL,
  tone: TYPOGRAPHY_TONES.INHERIT,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
});

export const TextSmall = createTypographyComponent<'small', HTMLElement>('small', 'Text.Small', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.SECONDARY,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
});

export const TextCode = createTypographyComponent<'code', HTMLElement>('code', 'Text.Code', {
  code: true,
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.NORMAL,
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.REGULAR,
});

export const Text = {
  P: TextP,
  Span: TextSpan,
  A: TextA,
  Label: TextLabel,
  Strong: TextStrong,
  Em: TextEm,
  Small: TextSmall,
  Code: TextCode,
} as const;
