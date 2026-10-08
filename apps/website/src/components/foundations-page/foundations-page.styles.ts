import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Box,
  COLORS,
  FOCUS_RINGS,
  FONT_WEIGHTS,
  Grid,
  HFlex,
  LINE_HEIGHTS,
  LIST_MARKERS,
  List,
  ListItem,
  RADII,
  SIZES,
  SPACINGS,
  Text,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const SwatchFamily = styled(Grid)`
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
`;

export const SwatchStrip = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(${SIZES.XL}, 1fr));
  gap: ${SPACINGS.XS};
`;

export const ThemePanels = styled(Grid)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${SPACINGS.MD};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ThemePanel = styled(Grid)`
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

export const RoleList = styled(Grid)`
  gap: ${SPACINGS.XS};
`;

export const Scale = styled(List).attrs({ marker: LIST_MARKERS.NONE })`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const ScaleRow = styled(ListItem)`
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

export const ScaleVisual = styled(HFlex)`
  align-items: center;
  gap: ${SPACINGS.SM};
  min-width: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_PRIMARY};
`;

export const Bar = styled(Box).attrs({ forwardedAs: 'span' })`
  flex: none;
  width: var(--length);
  max-width: 100%;
  height: ${SPACINGS.SM};
  background: ${COLORS.PRIMARY};

  [data-current='true'] & {
    background: ${COLORS.ACCENT};
  }
`;

export const Square = styled(Box).attrs({ forwardedAs: 'span' })`
  flex: none;
  width: var(--length, ${SIZES.LG});
  height: var(--length, ${SIZES.LG});
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.PRIMARY};
  border-radius: var(--radius, ${RADII.NONE});
  background: color-mix(in srgb, ${COLORS.PRIMARY} 14%, transparent);
`;

export const TypeSpecimen = styled(Text.Span)`
  overflow: hidden;
  color: ${COLORS.TEXT_PRIMARY};
  font-family: inherit;
  letter-spacing: -0.01em;
  line-height: ${LINE_HEIGHTS.TIGHT};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FocusSpecimen = styled(Box).attrs({ forwardedAs: 'span' })`
  padding: ${SPACINGS.XXS} ${SPACINGS.SM};
  border-radius: ${FOCUS_RINGS.RADIUS};
  outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
  outline-offset: ${FOCUS_RINGS.OFFSET};
`;

export const FocusField = styled(Box)`
  max-width: calc(${SIZES.XXL} * 4);
`;
