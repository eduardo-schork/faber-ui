import type { TInputProps } from '../input';

export type TAutocompleteProps = Omit<TInputProps, 'list'> & {
  /** Suggested values. The reader can still type anything. */
  readonly options: readonly string[];
};
