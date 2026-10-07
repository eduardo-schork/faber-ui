import {
  BORDER_WIDTHS,
  BREAKPOINTS,
  Card,
  CARD_PADDINGS,
  COLORS,
  FONT_SIZES,
  SIZES,
  SPACINGS,
  Textarea,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText, SITE_HEADER_HEIGHT } from '@/components/sheet/sheet.styles';

export const PlaygroundGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: start;
  gap: ${SPACINGS.LG};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const EditorColumn = styled.div`
  position: sticky;
  top: calc(${SITE_HEADER_HEIGHT} + ${SPACINGS.LG});
  display: grid;
  gap: ${SPACINGS.MD};
  min-width: ${SPACINGS.NONE};

  @media (max-width: ${BREAKPOINTS.DESKTOP_LARGE}) {
    position: static;
  }
`;

export const PresetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${SPACINGS.XS};
`;

export const StylesheetEditor = styled(Textarea)`
  min-height: calc(${SIZES.XXL} * 4.5);
  font-size: ${FONT_SIZES.SM};
  line-height: 1.6;
  tab-size: 2;
  white-space: pre;
`;

export const PreviewCard = styled(Card).attrs({ padding: CARD_PADDINGS.NONE })`
  overflow: hidden;
`;

export const PreviewHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.SM} ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

/** Paints the theme of the surrounding provider so the preview reads as its own region. */
export const PreviewSurface = styled.div`
  display: grid;
  gap: ${SPACINGS.LG};
  padding: ${SPACINGS.LG};
  color: ${COLORS.TEXT_PRIMARY};
  background: ${COLORS.BACKGROUND_PRIMARY};

  @media (max-width: ${BREAKPOINTS.MOBILE_LARGE}) {
    padding: ${SPACINGS.MD};
  }
`;

export const ReferenceList = styled.ul`
  ${captionText}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(${SIZES.XXL} * 3), 1fr));
  gap: ${SPACINGS.XXS} ${SPACINGS.MD};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  color: ${COLORS.TEXT_SECONDARY};
  list-style: none;
  overflow-wrap: anywhere;
`;
