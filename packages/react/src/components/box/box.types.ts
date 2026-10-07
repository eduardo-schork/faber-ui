import type { TSpacingTokenName } from '@faber-ui/tokens';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

import type { TResponsiveValue } from '../../internal/create-responsive-styles';

export type TBoxProps = ComponentPropsWithoutRef<'div'> & {
  readonly as?: ElementType;
  /** Inner spacing on every side, as a spacing token name. */
  readonly padding?: TResponsiveValue<TSpacingTokenName>;
};
