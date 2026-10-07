'use client';

import { Segment, SEGMENTED_CONTROL_SIZES, SegmentedControl } from '@faber-ui/react';
import { useId } from 'react';

type TOptionSwitchProps<TValue extends string> = {
  readonly label: string;
  readonly onChange: (value: TValue) => void;
  readonly options: readonly TValue[];
  readonly value: TValue;
};

/** A controlled list of string options rendered with the library SegmentedControl. */
export function OptionSwitch<TValue extends string>({
  label,
  onChange,
  options,
  value,
}: TOptionSwitchProps<TValue>) {
  const name = useId();

  return (
    <SegmentedControl label={label} size={SEGMENTED_CONTROL_SIZES.SMALL}>
      {options.map((option) => (
        <Segment
          key={option}
          name={name}
          value={option}
          checked={option === value}
          onChange={() => {
            onChange(option);
          }}
        >
          {option}
        </Segment>
      ))}
    </SegmentedControl>
  );
}
