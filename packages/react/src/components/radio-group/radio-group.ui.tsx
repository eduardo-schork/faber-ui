import { forwardRef, useId, type ReactNode } from 'react';

import {
  RadioGroupError,
  RadioGroupLabel,
  RadioGroupMessage,
  RadioGroupOptions,
  StyledRadioGroup,
} from './radio-group.styles';
import type { TRadioGroupProps } from './radio-group.types';

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

export const RadioGroup = forwardRef<HTMLFieldSetElement, TRadioGroupProps>(function RadioGroup(
  {
    'aria-describedby': ariaDescribedBy,
    'aria-invalid': ariaInvalid,
    children,
    description,
    error,
    invalid,
    label,
    ...nativeProps
  },
  ref,
) {
  const generatedId = useId();
  const descriptionId = `${generatedId}-description`;
  const errorId = `${generatedId}-error`;
  const showDescription = hasContent(description);
  const isInvalid = invalid ?? hasContent(error);
  const showError = isInvalid && hasContent(error);
  const describedBy = [
    ariaDescribedBy,
    showDescription ? descriptionId : undefined,
    showError ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <StyledRadioGroup
      {...nativeProps}
      ref={ref}
      aria-describedby={describedBy.length > 0 ? describedBy : undefined}
      aria-invalid={invalid === false ? undefined : isInvalid ? true : ariaInvalid}
      data-invalid={isInvalid || undefined}
    >
      <RadioGroupLabel>{label}</RadioGroupLabel>
      {showDescription ? (
        <RadioGroupMessage id={descriptionId}>{description}</RadioGroupMessage>
      ) : null}
      <RadioGroupOptions>{children}</RadioGroupOptions>
      {showError ? (
        <RadioGroupError id={errorId} aria-live="polite">
          {error}
        </RadioGroupError>
      ) : null}
    </StyledRadioGroup>
  );
});
