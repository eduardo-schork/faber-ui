import { forwardRef, useId, type ReactNode } from 'react';

import { joinClassNames } from '../../internal/join-class-names';
import { Text } from '../text';
import { TYPOGRAPHY_SIZES } from '../typography/typography.constants';

import {
  ChoiceControlDescription,
  ChoiceControlError,
  ChoiceControlInput,
  ChoiceControlLabel,
  ChoiceControlRoot,
} from './choice-control.styles';
import type { TChoiceControlProps } from './choice-control.types';

type TChoiceControlInternalProps = TChoiceControlProps & {
  readonly control?: 'choice' | 'switch';
  readonly type: 'checkbox' | 'radio';
};

const hasContent = (content: ReactNode) =>
  content !== null && content !== undefined && content !== false && content !== '';

export const ChoiceControl = forwardRef<HTMLInputElement, TChoiceControlInternalProps>(
  function ChoiceControl(
    {
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      className,
      control = 'choice',
      description,
      disabled,
      error,
      id,
      invalid,
      label,
      style,
      type,
      ...nativeProps
    },
    ref,
  ) {
    const generatedId = useId();
    const controlId = id ?? `${generatedId}-control`;
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
      <ChoiceControlRoot
        className={joinClassNames(`faber-ui-${control === 'switch' ? 'switch' : type}`, className)}
        data-disabled={disabled === true ? true : undefined}
        data-invalid={isInvalid ? true : undefined}
        data-control={control}
        style={style}
      >
        <ChoiceControlLabel htmlFor={controlId}>
          <ChoiceControlInput
            {...nativeProps}
            ref={ref}
            type={type}
            data-control={control}
            id={controlId}
            disabled={disabled}
            aria-describedby={describedBy.length > 0 ? describedBy : undefined}
            aria-invalid={invalid === false ? undefined : isInvalid ? true : ariaInvalid}
          />
          <Text.Span size={TYPOGRAPHY_SIZES.SMALLER}>{label}</Text.Span>
        </ChoiceControlLabel>
        {showDescription ? (
          <ChoiceControlDescription id={descriptionId}>{description}</ChoiceControlDescription>
        ) : null}
        {showError ? (
          <ChoiceControlError id={errorId} aria-live="polite">
            {error}
          </ChoiceControlError>
        ) : null}
      </ChoiceControlRoot>
    );
  },
);
