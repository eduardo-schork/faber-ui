import { forwardRef } from 'react';

import { StyledSlider } from './slider.styles';
import type { TSliderProps } from './slider.types';

export const Slider = forwardRef<HTMLInputElement, TSliderProps>(function Slider(props, ref) {
  return <StyledSlider {...props} ref={ref} type="range" />;
});
