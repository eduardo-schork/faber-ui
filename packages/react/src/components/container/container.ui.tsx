import { CONTAINER_SIZES, type TContainerSizeTokenName } from '@faber-ui/tokens';
import { forwardRef, type CSSProperties } from 'react';

import { StyledContainer } from './container.styles';
import type { TContainerProps } from './container.types';

type TContainerCSSProperties = CSSProperties & {
  readonly '--faber-ui-container-max-width'?: string;
};

type TContainerSize = NonNullable<TContainerProps['size']>;

const resolveContainerSize = (size: TContainerSize) =>
  Object.hasOwn(CONTAINER_SIZES, size) ? CONTAINER_SIZES[size as TContainerSizeTokenName] : size;

export const Container = forwardRef<HTMLDivElement, TContainerProps>(function Container(
  { center = false, size, style, ...nativeProps },
  ref,
) {
  const resolvedStyle =
    size === undefined
      ? style
      : ({
          ...style,
          '--faber-ui-container-max-width': resolveContainerSize(size),
        } satisfies TContainerCSSProperties);

  return (
    <StyledContainer
      {...nativeProps}
      ref={ref}
      data-center={center || undefined}
      data-container=""
      data-custom-size={size === undefined ? undefined : ''}
      style={resolvedStyle}
    />
  );
});
