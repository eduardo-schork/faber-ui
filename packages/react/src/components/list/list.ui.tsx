import { forwardRef } from 'react';

import { LIST_MARKERS } from './list.constants';
import { StyledList, StyledListItem } from './list.styles';
import type { TListItemProps, TListProps } from './list.types';

export const List = forwardRef<HTMLUListElement, TListProps>(function List(
  { gap = 'XXS', marker = LIST_MARKERS.DEFAULT, ordered = false, role, ...nativeProps },
  ref,
) {
  return (
    <StyledList
      {...nativeProps}
      {...(ordered ? { as: 'ol' as const } : {})}
      ref={ref}
      // Safari drops list semantics when the markers are removed; the role restores them.
      role={role ?? (marker === LIST_MARKERS.NONE ? 'list' : undefined)}
      $gap={gap}
      data-marker={marker}
    />
  );
});

export const ListItem = forwardRef<HTMLLIElement, TListItemProps>(function ListItem(props, ref) {
  return <StyledListItem {...props} ref={ref} />;
});
