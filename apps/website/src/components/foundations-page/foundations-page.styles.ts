import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  COLORS,
  FOCUS_RINGS,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  RADII,
  SIZES,
  SPACINGS,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const SwatchFamily = styled.div`
  display: grid;
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
`;

export const SwatchStrip = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${SIZES.XL}, 1fr));
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  overflow: hidden;
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  list-style: none;
`;

export const Swatch = styled.li`
  ${captionText}
  display: grid;
  gap: ${SPACINGS.XXS};
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.XS};
  color: ${COLORS.TEXT_SECONDARY};
  background: ${COLORS.SURFACE_PRIMARY};
  overflow-wrap: anywhere;

  &::before {
    height: ${SIZES.LG};
    margin: calc(-1 * ${SPACINGS.XS}) calc(-1 * ${SPACINGS.XS}) ${SPACINGS.XXS};
    background: var(--swatch);
    content: '';
  }

  strong {
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }
`;

export const ThemePanels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${SPACINGS.MD};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ThemePanel = styled.div`
  display: grid;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  padding: ${SPACINGS.LG};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.BACKGROUND_PRIMARY};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const RoleList = styled.ul`
  display: grid;
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  list-style: none;
`;

export const Role = styled.li`
  ${captionText}
  display: grid;
  grid-template-columns: ${SIZES.XS} minmax(0, 1fr) auto;
  align-items: center;
  gap: ${SPACINGS.SM};
  padding-block: ${SPACINGS.XXS};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_SECONDARY};

  &::before {
    width: ${SIZES.XS};
    height: ${SIZES.XS};
    border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_STRONG};
    border-radius: ${RADII.SM};
    background: var(--swatch);
    content: '';
  }

  strong {
    overflow: hidden;
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    > span {
      display: none;
    }
  }
`;

/** A token table: name, value, and a drawing of the value. */
export const Scale = styled.ul`
  display: grid;
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  list-style: none;
`;

export const ScaleRow = styled.li`
  ${captionText}
  display: grid;
  grid-template-columns: calc(${SIZES.XXL} * 3) ${SIZES.XXL} minmax(0, 1fr);
  align-items: center;
  gap: ${SPACINGS.MD};
  min-height: ${SIZES.LG};
  padding-block: ${SPACINGS.XS};
  border-top: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  color: ${COLORS.TEXT_SECONDARY};

  strong {
    color: ${COLORS.TEXT_PRIMARY};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    overflow-wrap: anywhere;
  }

  > span:first-child {
    display: grid;
    min-width: ${SPACINGS.NONE};
  }

  small {
    overflow: hidden;
    font-size: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-current='true'] strong {
    color: ${COLORS.ACCENT};
  }

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    grid-template-columns: calc(${SIZES.XXL} + ${SPACINGS.XXL}) ${SIZES.XL} minmax(0, 1fr);
    gap: ${SPACINGS.XS};

    small {
      display: none;
    }
  }
`;

export const ScaleVisual = styled.div`
  display: flex;
  align-items: center;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const Bar = styled.span`
  flex: none;
  width: var(--length);
  max-width: 100%;
  height: ${SPACINGS.SM};
  background: ${COLORS.PRIMARY};

  [data-current='true'] & {
    background: ${COLORS.ACCENT};
  }
`;

export const Square = styled.span`
  flex: none;
  width: var(--length, ${SIZES.LG});
  height: var(--length, ${SIZES.LG});
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.PRIMARY};
  border-radius: var(--radius, ${RADII.NONE});
  background: color-mix(in srgb, ${COLORS.PRIMARY} 14%, transparent);
`;

export const Stroke = styled.span`
  flex: 1;
  max-width: calc(${SIZES.XXL} * 3);
  height: var(--length);
  background: ${COLORS.TEXT_PRIMARY};
`;

export const TypeSpecimen = styled.span`
  overflow: hidden;
  color: ${COLORS.TEXT_PRIMARY};
  font-family: inherit;
  letter-spacing: -0.01em;
  line-height: ${LINE_HEIGHTS.TIGHT};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FocusSpecimen = styled.span`
  padding: ${SPACINGS.XXS} ${SPACINGS.SM};
  border-radius: ${FOCUS_RINGS.RADIUS};
  outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
  outline-offset: ${FOCUS_RINGS.OFFSET};
`;
