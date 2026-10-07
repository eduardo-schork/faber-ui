import { forwardRef } from 'react';

import { Text } from '../text';
import { TYPOGRAPHY_SIZES } from '../typography/typography.constants';
import { BreadcrumbList, StyledBreadcrumb, StyledBreadcrumbItem } from './breadcrumb.styles';
import type { TBreadcrumbItemProps, TBreadcrumbProps } from './breadcrumb.types';

export const Breadcrumb = forwardRef<HTMLElement, TBreadcrumbProps>(function Breadcrumb(
  { 'aria-label': ariaLabel = 'Breadcrumb', children, ...nativeProps },
  ref,
) {
  return (
    <StyledBreadcrumb {...nativeProps} ref={ref} aria-label={ariaLabel}>
      <BreadcrumbList>{children}</BreadcrumbList>
    </StyledBreadcrumb>
  );
});

export const BreadcrumbItem = forwardRef<HTMLLIElement, TBreadcrumbItemProps>(
  function BreadcrumbItem({ children, current = false, ...nativeProps }, ref) {
    return (
      <StyledBreadcrumbItem {...nativeProps} ref={ref}>
        {current ? (
          <Text.Span aria-current="page" size={TYPOGRAPHY_SIZES.SMALLER}>
            {children}
          </Text.Span>
        ) : (
          children
        )}
      </StyledBreadcrumbItem>
    );
  },
);
