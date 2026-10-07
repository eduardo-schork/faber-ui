import { forwardRef } from 'react';

import { ChoiceControl } from '../choice-control/choice-control.ui';
import type { TSwitchProps } from './switch.types';

export const Switch = forwardRef<HTMLInputElement, TSwitchProps>(function Switch(props, ref) {
  return <ChoiceControl {...props} ref={ref} type="checkbox" control="switch" role="switch" />;
});
