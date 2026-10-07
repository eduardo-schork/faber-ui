import type { ComponentPropsWithoutRef } from 'react';

export type TSliderProps = Omit<ComponentPropsWithoutRef<'input'>, 'children' | 'type'>;
