import { createTypographyComponent } from '../typography/create-typography-component';
import {
  TYPOGRAPHY_LINE_HEIGHTS,
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';

export const TitleH1 = createTypographyComponent<'h1', HTMLHeadingElement>('h1', 'Title.H1', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.LARGEST,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.BOLD,
});

export const TitleH2 = createTypographyComponent<'h2', HTMLHeadingElement>('h2', 'Title.H2', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.LARGER,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.BOLD,
});

export const TitleH3 = createTypographyComponent<'h3', HTMLHeadingElement>('h3', 'Title.H3', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.LARGE,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
});

export const TitleH4 = createTypographyComponent<'h4', HTMLHeadingElement>('h4', 'Title.H4', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.MEDIUM,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
});

export const TitleH5 = createTypographyComponent<'h5', HTMLHeadingElement>('h5', 'Title.H5', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.SMALL,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
});

export const TitleH6 = createTypographyComponent<'h6', HTMLHeadingElement>('h6', 'Title.H6', {
  lineHeight: TYPOGRAPHY_LINE_HEIGHTS.TIGHT,
  size: TYPOGRAPHY_SIZES.SMALLER,
  tone: TYPOGRAPHY_TONES.PRIMARY,
  weight: TYPOGRAPHY_WEIGHTS.SEMIBOLD,
});

export const Title = {
  H1: TitleH1,
  H2: TitleH2,
  H3: TitleH3,
  H4: TitleH4,
  H5: TitleH5,
  H6: TitleH6,
} as const;
