import { forwardRef } from 'react';
import type { ElementType } from 'react';

import { joinClassNames } from '../../internal/join-class-names';
import { StyledTypography } from './typography.styles';
import type { TTypographyComponentProps, TTypographyDefaults } from './typography.types';

export const createTypographyComponent = <
  TElement extends ElementType,
  TInstance extends HTMLElement,
>(
  element: TElement,
  displayName: string,
  defaults: TTypographyDefaults,
) => {
  const memberClassName = `faber-ui-${displayName.toLowerCase().replace('.', '-')}`;

  const TypographyComponent = forwardRef<TInstance, TTypographyComponentProps<TElement>>(
    function TypographyComponent(props, ref) {
      const {
        children,
        className,
        size = defaults.size,
        tone = defaults.tone,
        truncate = false,
        weight = defaults.weight,
        ...nativeProps
      } = props as TTypographyComponentProps<TElement>;

      return (
        <StyledTypography
          {...nativeProps}
          as={element}
          ref={ref}
          className={joinClassNames(memberClassName, className)}
          data-code={defaults.code === true ? true : undefined}
          data-italic={defaults.italic === true ? true : undefined}
          data-line-height={defaults.lineHeight}
          data-link={defaults.link === true ? true : undefined}
          data-size={size}
          data-tone={tone}
          data-truncate={truncate || undefined}
          data-weight={weight}
        >
          {children}
        </StyledTypography>
      );
    },
  );

  TypographyComponent.displayName = displayName;

  return TypographyComponent;
};
