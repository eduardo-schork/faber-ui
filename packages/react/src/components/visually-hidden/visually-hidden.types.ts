import type { ComponentPropsWithoutRef } from 'react';

export type TVisuallyHiddenProps = ComponentPropsWithoutRef<'span'> & {
  readonly focusable?: boolean;
};
