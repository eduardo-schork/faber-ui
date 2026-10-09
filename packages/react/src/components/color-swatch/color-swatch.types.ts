import type { ReactNode } from 'react';

import type { THFlexProps } from '../flex';
import type { COLOR_SWATCH_ORIENTATIONS } from './color-swatch.constants';

export type TColorSwatchOrientation =
  (typeof COLOR_SWATCH_ORIENTATIONS)[keyof typeof COLOR_SWATCH_ORIENTATIONS];

export type TColorSwatchProps = Omit<THFlexProps, 'children' | 'color'> & {
  /** Any CSS color or gradient, including a `var()` reference to a theme role. */
  readonly color: string;
  /** The name of the color. */
  readonly label?: ReactNode;
  /** Sample beside the text, or above it. Defaults to `horizontal`. */
  readonly orientation?: TColorSwatchOrientation;
  /** The value shown next to the name, such as the color code. */
  readonly value?: ReactNode;
};
