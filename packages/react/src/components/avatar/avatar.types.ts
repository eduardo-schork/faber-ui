import type { ComponentPropsWithoutRef, ReactNode, ReactEventHandler } from 'react';

import type { TAvatarSize } from './avatar.constants';

export type TAvatarProps = Omit<ComponentPropsWithoutRef<'span'>, 'children'> & {
  readonly alt: string;
  readonly fallback: ReactNode;
  readonly onImageError?: ReactEventHandler<HTMLImageElement>;
  readonly size?: TAvatarSize;
  readonly src?: string;
};
