import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  LINE_HEIGHTS,
  RADII,
  SIZES,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { AVATAR_SIZES } from './avatar.constants';

export const StyledAvatar = styled.span.attrs({ className: 'faber-ui-avatar' })`
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: ${SIZES.MD};
  height: ${SIZES.MD};
  overflow: hidden;
  border-radius: ${RADII.FULL};
  color: ${COLORS.ON_PRIMARY};
  background-color: ${COLORS.PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  font-size: ${FONT_SIZES.SM};
  font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  line-height: ${LINE_HEIGHTS.NONE};
  user-select: none;

  &[data-size='${AVATAR_SIZES.SMALL}'] {
    width: ${SIZES.SM};
    height: ${SIZES.SM};
    font-size: ${FONT_SIZES.XS};
  }

  &[data-size='${AVATAR_SIZES.LARGE}'] {
    width: ${SIZES.LG};
    height: ${SIZES.LG};
    font-size: ${FONT_SIZES.MD};
  }
`;

export const AvatarImage = styled.img.attrs({ className: 'faber-ui-avatar-image' })`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
