import type { ComponentPropsWithoutRef } from 'react';

import type { INPUT_TYPES } from './input.constants';

export type TInputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export type TInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  readonly type?: TInputType;
};
