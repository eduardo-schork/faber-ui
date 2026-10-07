import { forwardRef } from 'react';

import { ChoiceControl } from '../choice-control/choice-control.ui';
import type { TRadioProps } from './radio.types';

export const Radio = forwardRef<HTMLInputElement, TRadioProps>(function Radio(props, ref) {
  return <ChoiceControl {...props} ref={ref} type="radio" />;
});
