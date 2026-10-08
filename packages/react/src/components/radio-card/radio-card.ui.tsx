import { forwardRef } from 'react';

import {
  TYPOGRAPHY_SIZES,
  TYPOGRAPHY_TONES,
  TYPOGRAPHY_WEIGHTS,
} from '../typography/typography.constants';
import {
  RadioCardContent,
  RadioCardDescription,
  RadioCardInput,
  RadioCardLabel,
  RadioCardRoot,
} from './radio-card.styles';
import type { TRadioCardProps } from './radio-card.types';

export const RadioCard = forwardRef<HTMLInputElement, TRadioCardProps>(function RadioCard(
  { className, description, label, media, style, ...inputProps },
  ref,
) {
  // The label wraps the description, so both are already part of the accessible name.
  const showDescription = description !== undefined && description !== null;

  return (
    <RadioCardRoot className={className} style={style}>
      <RadioCardInput {...inputProps} ref={ref} type="radio" />
      {media}
      <RadioCardContent>
        <RadioCardLabel
          size={TYPOGRAPHY_SIZES.SMALLER}
          tone={TYPOGRAPHY_TONES.INHERIT}
          weight={TYPOGRAPHY_WEIGHTS.MEDIUM}
        >
          {label}
        </RadioCardLabel>
        {showDescription ? (
          <RadioCardDescription size={TYPOGRAPHY_SIZES.SMALLEST} tone={TYPOGRAPHY_TONES.SECONDARY}>
            {description}
          </RadioCardDescription>
        ) : null}
      </RadioCardContent>
    </RadioCardRoot>
  );
});
