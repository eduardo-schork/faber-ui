import { forwardRef } from 'react';

import { SEGMENTED_CONTROL_SIZES } from './segmented-control.constants';
import {
  SegmentedControlLabel,
  SegmentedControlOptions,
  SegmentInput,
  SegmentLabel,
  SegmentText,
  StyledSegmentedControl,
} from './segmented-control.styles';
import type { TSegmentedControlProps, TSegmentProps } from './segmented-control.types';

export const SegmentedControl = forwardRef<HTMLFieldSetElement, TSegmentedControlProps>(
  function SegmentedControl(
    { children, label, labelHidden = false, size = SEGMENTED_CONTROL_SIZES.MEDIUM, ...nativeProps },
    ref,
  ) {
    return (
      <StyledSegmentedControl {...nativeProps} ref={ref} data-size={size}>
        <SegmentedControlLabel data-hidden={labelHidden || undefined}>
          {label}
        </SegmentedControlLabel>
        <SegmentedControlOptions data-segmented-control-options>{children}</SegmentedControlOptions>
      </StyledSegmentedControl>
    );
  },
);

export const Segment = forwardRef<HTMLInputElement, TSegmentProps>(function Segment(
  { children, className, style, ...nativeProps },
  ref,
) {
  return (
    <SegmentLabel className={className} style={style}>
      <SegmentInput {...nativeProps} ref={ref} type="radio" />
      <SegmentText data-segment-text>{children}</SegmentText>
    </SegmentLabel>
  );
});
