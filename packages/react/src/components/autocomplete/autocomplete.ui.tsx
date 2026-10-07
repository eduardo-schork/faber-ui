import { forwardRef, useId } from 'react';

import { joinClassNames } from '../../internal/join-class-names';
import { Input } from '../input';
import type { TAutocompleteProps } from './autocomplete.types';

export const Autocomplete = forwardRef<HTMLInputElement, TAutocompleteProps>(function Autocomplete(
  { className, options, ...inputProps },
  ref,
) {
  const listId = useId();

  return (
    <>
      <Input
        {...inputProps}
        ref={ref}
        className={joinClassNames('faber-ui-autocomplete', className)}
        list={listId}
      />

      <datalist className="faber-ui-autocomplete-options" id={listId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </>
  );
});
