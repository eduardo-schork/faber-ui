import { forwardRef } from 'react';

import { StyledSelect } from './select.styles';
import type { TSelectProps } from './select.types';

export const Select = forwardRef<HTMLSelectElement, TSelectProps>(function Select(props, ref) {
  return <StyledSelect {...props} ref={ref} />;
});
