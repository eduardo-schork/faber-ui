import type { TSpacingTokenName } from '@faber-ui/tokens';
import type { ComponentPropsWithoutRef } from 'react';

import type { TListMarker } from './list.constants';

export type TListProps = ComponentPropsWithoutRef<'ul'> & {
  /** The space between items, as a spacing token name. */
  readonly gap?: TSpacingTokenName;
  /** `none` removes the bullets or numbers and the indentation. */
  readonly marker?: TListMarker;
  /** Renders an `ol`, for items whose order matters. */
  readonly ordered?: boolean;
};

export type TListItemProps = ComponentPropsWithoutRef<'li'>;
