import { SPACINGS } from '@faber-ui/tokens';

/** Turns a spacing token name into its CSS value and passes any other length through. */
export const resolveSpacing = (spacing: string) =>
  Object.hasOwn(SPACINGS, spacing) ? SPACINGS[spacing as keyof typeof SPACINGS] : spacing;
