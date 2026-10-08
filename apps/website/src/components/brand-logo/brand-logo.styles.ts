import { COLORS, SIZES, SPACINGS } from '@faber-ui/react';
import styled from 'styled-components';

/*
 * The crystal is mixed from the primary role, so the mark follows the theme and any material the
 * visitor picks. The rind is stone, not brand colour: it keeps its own greys, set per scheme with
 * the same selectors the theme stylesheet uses.
 */
export const StyledBrandLogo = styled.svg`
  --logo-facet-a0: color-mix(in srgb, ${COLORS.PRIMARY} 38%, white);
  --logo-facet-a1: color-mix(in srgb, ${COLORS.PRIMARY} 70%, white);
  --logo-facet-a2: ${COLORS.PRIMARY};
  --logo-facet-a3: color-mix(in srgb, ${COLORS.PRIMARY} 72%, black);
  --logo-facet-a4: color-mix(in srgb, ${COLORS.PRIMARY} 46%, black);
  --logo-rind-start: hsl(240 12% 30%);
  --logo-rind-end: hsl(240 18% 8%);
  --logo-band: color-mix(in srgb, ${COLORS.PRIMARY} 10%, white);

  flex: none;
  width: calc(${SIZES.XS} + ${SPACINGS.XXS});
  height: calc(${SIZES.XS} + ${SPACINGS.XXS});

  :root[data-theme='dark'] & {
    --logo-rind-start: hsl(240 12% 52%);
    --logo-rind-end: hsl(240 12% 30%);
  }

  @media (prefers-color-scheme: dark) {
    :root[data-theme='system'] & {
      --logo-rind-start: hsl(240 12% 52%);
      --logo-rind-end: hsl(240 12% 30%);
    }
  }
`;
