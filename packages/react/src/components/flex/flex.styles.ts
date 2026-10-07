import { BORDER_WIDTHS, BREAKPOINTS, SPACINGS, type TBreakpointTokenName } from '@faber-ui/tokens';
import styled, { css } from 'styled-components';

import type {
  TFlexAlign,
  TFlexDirection,
  TFlexGap,
  TFlexJustify,
  TFlexResponsiveValue,
  TFlexWrap,
} from './flex.types';

const RESPONSIVE_BREAKPOINTS = [
  'MOBILE_LARGE',
  'TABLET',
  'DESKTOP',
  'DESKTOP_LARGE',
  'DESKTOP_WIDE',
] as const satisfies readonly TBreakpointTokenName[];

type TFlexStyleValue = TFlexAlign | TFlexDirection | TFlexGap | TFlexJustify | TFlexWrap;
type TFlexDeclaration<TValue extends TFlexStyleValue> = (value: TValue) => ReturnType<typeof css>;

const isResponsiveValue = <TValue extends TFlexStyleValue>(
  value: TFlexResponsiveValue<TValue>,
): value is Partial<Record<TBreakpointTokenName, TValue>> => typeof value === 'object';

const createResponsiveStyles = <TValue extends TFlexStyleValue>(
  value: TFlexResponsiveValue<TValue> | undefined,
  declaration: TFlexDeclaration<TValue>,
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

const resolveGap = (gap: TFlexGap) =>
  Object.hasOwn(SPACINGS, gap) ? SPACINGS[gap as keyof typeof SPACINGS] : gap;

type TStyledFlexProps = {
  readonly $align?: TFlexResponsiveValue<TFlexAlign>;
  readonly $direction?: TFlexResponsiveValue<TFlexDirection>;
  readonly $gap?: TFlexResponsiveValue<TFlexGap>;
  readonly $inline: boolean;
  readonly $justify?: TFlexResponsiveValue<TFlexJustify>;
  readonly $wrap?: TFlexResponsiveValue<TFlexWrap>;
};

export const StyledFlex = styled.div.attrs({ className: 'faber-ui-flex' })<TStyledFlexProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  min-width: ${SPACINGS.NONE};
  ${({ $direction }) =>
    createResponsiveStyles(
      $direction,
      (value) => css`
        flex-direction: ${value};
      `,
    )}
  ${({ $align }) =>
    createResponsiveStyles(
      $align,
      (value) => css`
        align-items: ${value};
      `,
    )}
  ${({ $justify }) =>
    createResponsiveStyles(
      $justify,
      (value) => css`
        justify-content: ${value};
      `,
    )}
  ${({ $wrap }) =>
    createResponsiveStyles(
      $wrap,
      (value) => css`
        flex-wrap: ${value};
      `,
    )}
  ${({ $gap }) =>
    createResponsiveStyles(
      $gap,
      (value) => css`
        gap: ${resolveGap(value)};
      `,
    )}
  &[data-outline-color] {
    outline: ${BORDER_WIDTHS.DEFAULT} dashed var(--faber-ui-flex-outline-color);
  }
`;
