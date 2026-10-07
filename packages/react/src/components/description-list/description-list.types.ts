import type { ComponentPropsWithoutRef } from 'react';

import type { TVFlexProps } from '../flex';
import type { TDescriptionListOrientation } from './description-list.constants';

export type TDescriptionListProps = ComponentPropsWithoutRef<'dl'> & {
  /** `horizontal` lays the items out side by side and wraps them. */
  readonly orientation?: TDescriptionListOrientation;
};

/** One term with its details. */
export type TDescriptionItemProps = Omit<TVFlexProps, 'as'>;
export type TDescriptionTermProps = ComponentPropsWithoutRef<'dt'>;
export type TDescriptionDetailsProps = ComponentPropsWithoutRef<'dd'>;
