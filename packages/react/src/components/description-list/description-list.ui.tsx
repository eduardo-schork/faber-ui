import { forwardRef } from 'react';

import { DESCRIPTION_LIST_ORIENTATIONS } from './description-list.constants';
import {
  StyledDescriptionDetails,
  StyledDescriptionItem,
  StyledDescriptionList,
  StyledDescriptionTerm,
} from './description-list.styles';
import type {
  TDescriptionDetailsProps,
  TDescriptionItemProps,
  TDescriptionListProps,
  TDescriptionTermProps,
} from './description-list.types';

export const DescriptionList = forwardRef<HTMLDListElement, TDescriptionListProps>(
  function DescriptionList(
    { orientation = DESCRIPTION_LIST_ORIENTATIONS.VERTICAL, ...nativeProps },
    ref,
  ) {
    return <StyledDescriptionList {...nativeProps} ref={ref} data-orientation={orientation} />;
  },
);

export const DescriptionItem = forwardRef<HTMLDivElement, TDescriptionItemProps>(
  function DescriptionItem(props, ref) {
    return <StyledDescriptionItem {...props} ref={ref} />;
  },
);

export const DescriptionTerm = forwardRef<HTMLElement, TDescriptionTermProps>(
  function DescriptionTerm(props, ref) {
    return <StyledDescriptionTerm {...props} ref={ref} />;
  },
);

export const DescriptionDetails = forwardRef<HTMLElement, TDescriptionDetailsProps>(
  function DescriptionDetails(props, ref) {
    return <StyledDescriptionDetails {...props} ref={ref} />;
  },
);
