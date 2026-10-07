import { forwardRef } from 'react';

import { StyledTable } from './table.styles';
import type { TTableProps } from './table.types';

export const Table = forwardRef<HTMLTableElement, TTableProps>(function Table(props, ref) {
  return <StyledTable {...props} ref={ref} />;
});
