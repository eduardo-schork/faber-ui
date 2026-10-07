import { forwardRef, type CSSProperties } from 'react';

import { StyledGrid } from './grid.styles';
import type { TGridProps } from './grid.types';

type TGridCSSProperties = CSSProperties & {
  readonly '--faber-ui-grid-min-column-width'?: string;
};

export const Grid = forwardRef<HTMLDivElement, TGridProps>(function Grid(
  { align, as, columns, gap, minColumnWidth, style, ...nativeProps },
  ref,
) {
  const resolvedStyle =
    minColumnWidth === undefined
      ? style
      : ({
          ...style,
          '--faber-ui-grid-min-column-width': minColumnWidth,
        } satisfies TGridCSSProperties);

  return (
    <StyledGrid
      {...nativeProps}
      {...(align === undefined ? {} : { $align: align })}
      {...(as === undefined ? {} : { as })}
      {...(columns === undefined || minColumnWidth !== undefined ? {} : { $columns: columns })}
      {...(gap === undefined ? {} : { $gap: gap })}
      ref={ref}
      data-auto-fit={minColumnWidth === undefined ? undefined : ''}
      data-grid=""
      style={resolvedStyle}
    />
  );
});
