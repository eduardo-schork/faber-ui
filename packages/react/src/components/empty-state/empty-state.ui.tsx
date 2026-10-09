import { forwardRef } from 'react';

import { TYPOGRAPHY_SIZES, TYPOGRAPHY_TONES } from '../typography/typography.constants';
import {
  EmptyStateActions,
  EmptyStateDescription,
  EmptyStateMedia,
  EmptyStateRoot,
  EmptyStateTitle,
} from './empty-state.styles';
import type { TEmptyStateProps } from './empty-state.types';

export const EmptyState = forwardRef<HTMLDivElement, TEmptyStateProps>(function EmptyState(
  { actions, description, media, title, ...rootProps },
  ref,
) {
  return (
    <EmptyStateRoot {...rootProps} ref={ref}>
      {media === undefined ? null : <EmptyStateMedia aria-hidden="true">{media}</EmptyStateMedia>}
      <EmptyStateTitle size={TYPOGRAPHY_SIZES.MEDIUM}>{title}</EmptyStateTitle>
      {description === undefined ? null : (
        <EmptyStateDescription size={TYPOGRAPHY_SIZES.SMALLER} tone={TYPOGRAPHY_TONES.SECONDARY}>
          {description}
        </EmptyStateDescription>
      )}
      {actions === undefined ? null : <EmptyStateActions>{actions}</EmptyStateActions>}
    </EmptyStateRoot>
  );
});
