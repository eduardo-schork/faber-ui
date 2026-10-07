import { cloneElement, forwardRef, useId, type ReactNode } from 'react';

import { FieldDescription, FieldError, FieldLabel, FieldRoot } from './field.styles';
import type { TFieldProps } from './field.types';

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

export const Field = forwardRef<HTMLDivElement, TFieldProps>(function Field(
  { children, description, error, invalid, label, ...nativeProps },
  ref,
) {
  const generatedId = useId();
  const controlId = children.props.id ?? `${generatedId}-control`;
  const descriptionId = `${generatedId}-description`;
  const errorId = `${generatedId}-error`;
  const showDescription = hasContent(description);
  const isInvalid = invalid ?? hasContent(error);
  const showError = isInvalid && hasContent(error);
  const describedBy = [
    children.props['aria-describedby'],
    showDescription ? descriptionId : undefined,
    showError ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(' ');
  const control = cloneElement(children, {
    id: controlId,
    ...(describedBy ? { 'aria-describedby': describedBy } : {}),
    ...(isInvalid ? { 'aria-invalid': true } : {}),
  });

  return (
    <FieldRoot {...nativeProps} ref={ref} data-invalid={isInvalid || undefined}>
      <FieldLabel htmlFor={controlId}>{label}</FieldLabel>
      {control}
      {showDescription ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
      {showError ? (
        <FieldError id={errorId} aria-live="polite">
          {error}
        </FieldError>
      ) : null}
    </FieldRoot>
  );
});
