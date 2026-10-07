import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  LINE_HEIGHTS,
  SPACINGS,
  type TSpacingTokenName,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { LIST_MARKERS } from './list.constants';

type TStyledListProps = {
  readonly $gap: TSpacingTokenName;
};

export const StyledList = styled.ul.attrs({ className: 'faber-ui-list' })<TStyledListProps>`
  display: grid;
  gap: ${({ $gap }) => SPACINGS[$gap]};
  min-width: ${SPACINGS.NONE};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
  padding-inline-start: ${SPACINGS.LG};
  color: ${COLORS.TEXT_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.MD};
  line-height: ${LINE_HEIGHTS.NORMAL};

  &[data-marker='${LIST_MARKERS.NONE}'] {
    padding-inline-start: ${SPACINGS.NONE};
    list-style: none;
  }
`;

export const StyledListItem = styled.li.attrs({ className: 'faber-ui-list-item' })`
  min-width: ${SPACINGS.NONE};

  &::marker {
    color: ${COLORS.TEXT_SECONDARY};
  }
`;
