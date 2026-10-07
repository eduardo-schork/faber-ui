import { BORDER_WIDTHS } from '../border-widths';
import { RADII } from '../radii';

export const FOCUS_RINGS = {
  /** The border of a text field while it has focus: half a pixel over the resting border. */
  FIELD_BORDER_WIDTH: '1.5px',
  OFFSET: '2px',
  RADIUS: RADII.XS,
  WIDTH: BORDER_WIDTHS.STRONG,
} as const;

export type TFocusRingTokenName = keyof typeof FOCUS_RINGS;
export type TFocusRingTokenValue = (typeof FOCUS_RINGS)[TFocusRingTokenName];
