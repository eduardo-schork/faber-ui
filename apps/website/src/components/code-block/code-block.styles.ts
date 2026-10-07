import {
  BORDER_WIDTHS,
  CARD_PADDINGS,
  Card,
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  RADII,
  SPACINGS,
} from '@faber-ui/react';
import styled from 'styled-components';

import { captionText } from '@/components/sheet/sheet.styles';

export const CodeFrame = styled(Card).attrs({ padding: CARD_PADDINGS.NONE })`
  overflow: hidden;
  border-radius: ${RADII.MD};
`;

export const CodeHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.MD};
  padding: ${SPACINGS.XXS} ${SPACINGS.XXS} ${SPACINGS.XXS} ${SPACINGS.MD};
  border-bottom: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
`;

export const CodeLabel = styled.span`
  ${captionText}
  overflow: hidden;
  color: ${COLORS.TEXT_SECONDARY};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CodePre = styled.pre`
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.MD};
  overflow-x: auto;
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: calc(${FONT_SIZES.SM} - 1px);
  line-height: 1.7;
  tab-size: 2;

  code {
    font: inherit;
  }

  [data-token='comment'] {
    color: ${COLORS.TEXT_SECONDARY};
    font-style: italic;
  }

  [data-token='keyword'] {
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  [data-token='string'],
  [data-token='property'] {
    color: ${COLORS.PRIMARY};
  }

  [data-token='tag'],
  [data-token='number'] {
    color: ${COLORS.ACCENT};
  }

  &:focus-visible {
    outline: ${BORDER_WIDTHS.STRONG} solid ${COLORS.FOCUS_RING};
    outline-offset: calc(-1 * ${BORDER_WIDTHS.STRONG});
  }
`;
