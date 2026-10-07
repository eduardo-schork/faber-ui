import type { TChoiceControlProps } from '../choice-control/choice-control.types';

export type TRadioProps = TChoiceControlProps & {
  readonly name: string;
  readonly value: string;
};
