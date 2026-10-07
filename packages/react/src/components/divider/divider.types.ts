import type { ComponentPropsWithoutRef } from 'react';

import type { TDividerOrientation } from './divider.constants';

export type TDividerProps = ComponentPropsWithoutRef<'hr'> & {
  readonly orientation?: TDividerOrientation;
};
