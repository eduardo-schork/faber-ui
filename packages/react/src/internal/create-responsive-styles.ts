import { BREAKPOINTS, type TBreakpointTokenName } from '@faber-ui/tokens';
import { css } from 'styled-components';

/** One value for every viewport, or a value per breakpoint applied mobile first. */
export type TResponsiveValue<TValue> = TValue | Partial<Record<TBreakpointTokenName, TValue>>;

const RESPONSIVE_BREAKPOINTS = [
  'MOBILE_LARGE',
  'TABLET',
  'DESKTOP',
  'DESKTOP_LARGE',
  'DESKTOP_WIDE',
] as const satisfies readonly TBreakpointTokenName[];

type TDeclaration<TValue> = (value: TValue) => ReturnType<typeof css>;

const isResponsiveValue = <TValue extends number | string>(
  value: TResponsiveValue<TValue>,
): value is Partial<Record<TBreakpointTokenName, TValue>> => typeof value === 'object';

export const createResponsiveStyles = <TValue extends number | string>(
  value: TResponsiveValue<TValue> | undefined,
  declaration: TDeclaration<TValue>,
) => {
  if (value === undefined) {
    return undefined;
  }

  if (!isResponsiveValue(value)) {
    return declaration(value);
  }

  return css`
    ${value.MOBILE === undefined ? undefined : declaration(value.MOBILE)}

    ${RESPONSIVE_BREAKPOINTS.map((breakpoint) => {
      const breakpointValue = value[breakpoint];

      return breakpointValue === undefined
        ? undefined
        : css`
            @media (min-width: ${BREAKPOINTS[breakpoint]}) {
              ${declaration(breakpointValue)}
            }
          `;
    })}
  `;
};
