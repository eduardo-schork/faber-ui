import { forwardRef } from 'react';

import { StyledInput } from './input.styles';
import type { TInputProps } from './input.types';

export const Input = forwardRef<HTMLInputElement, TInputProps>(function Input(props, ref) {
  return <StyledInput {...props} ref={ref} />;
});
