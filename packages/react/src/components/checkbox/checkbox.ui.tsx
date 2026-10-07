import { forwardRef } from 'react';

import { ChoiceControl } from '../choice-control/choice-control.ui';
import type { TCheckboxProps } from './checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, TCheckboxProps>(function Checkbox(props, ref) {
  return <ChoiceControl {...props} ref={ref} type="checkbox" />;
});
