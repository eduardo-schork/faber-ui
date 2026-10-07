import { forwardRef } from 'react';

import { StyledTextarea } from './textarea.styles';
import type { TTextareaProps } from './textarea.types';

export const Textarea = forwardRef<HTMLTextAreaElement, TTextareaProps>(
  function Textarea(props, ref) {
    return <StyledTextarea {...props} ref={ref} />;
  },
);
