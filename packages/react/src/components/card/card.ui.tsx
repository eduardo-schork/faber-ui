import { forwardRef } from 'react';

import { CARD_PADDINGS } from './card.constants';
import { StyledCard } from './card.styles';
import type { TCardProps } from './card.types';

export const Card = forwardRef<HTMLDivElement, TCardProps>(function Card(
  { as, padding = CARD_PADDINGS.MEDIUM, ...nativeProps },
  ref,
) {
  return (
    <StyledCard
      {...nativeProps}
      {...(as === undefined ? {} : { as })}
      ref={ref}
      data-card=""
      data-padding={padding}
    />
  );
});
