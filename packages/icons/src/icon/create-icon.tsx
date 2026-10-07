import { forwardRef, type ReactNode } from 'react';

import { ICON_DIMENSIONS, ICON_SIZES } from './icon.constants';
import type { TIconProps } from './icon.types';

/** Builds an outline icon drawn on a 16 by 16 grid that inherits the current text color. */
export const createIcon = (displayName: string, paths: ReactNode) => {
  const IconComponent = forwardRef<SVGSVGElement, TIconProps>(function IconComponent(
    { className, label, size = ICON_SIZES.SMALL, ...nativeProps },
    ref,
  ) {
    const dimension = ICON_DIMENSIONS[size];

    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        {...nativeProps}
        ref={ref}
        className={className === undefined ? 'faber-ui-icon' : `faber-ui-icon ${className}`}
        aria-hidden={label === undefined ? true : undefined}
        aria-label={label}
        data-icon={displayName}
        data-size={size}
        focusable="false"
        height={dimension}
        role={label === undefined ? undefined : 'img'}
        viewBox="0 0 16 16"
        width={dimension}
      >
        {paths}
      </svg>
    );
  });

  IconComponent.displayName = displayName;

  return IconComponent;
};
