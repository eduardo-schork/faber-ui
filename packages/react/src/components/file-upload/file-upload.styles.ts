import {
  ANIMATIONS,
  BORDER_WIDTHS,
  COLORS,
  FOCUS_RINGS,
  FONT_FAMILIES,
  OPACITIES,
  RADII,
  SPACINGS,
} from '@faber-ui/tokens';
import styled from 'styled-components';

import { Button } from '../button';
import { HFlex, VFlex } from '../flex';
import { List, ListItem } from '../list';
import { LIST_MARKERS } from '../list/list.constants';
import { Text } from '../text';

export const FileUploadRoot = styled(VFlex).attrs({ className: 'faber-ui-file-upload' })`
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
`;

/* A label, so a click or a key press on the area opens the native file picker. */
export const FileUploadDropzone = styled.label.attrs({
  className: 'faber-ui-file-upload-dropzone',
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${SPACINGS.XXS};
  box-sizing: border-box;
  padding: ${SPACINGS.LG};
  border: ${BORDER_WIDTHS.DEFAULT} dashed ${COLORS.BORDER_STRONG};
  border-radius: ${RADII.MD};
  color: ${COLORS.TEXT_PRIMARY};
  background-color: ${COLORS.SURFACE_PRIMARY};
  font-family: ${FONT_FAMILIES.BASE};
  text-align: center;
  cursor: pointer;
  transition:
    border-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD},
    background-color ${ANIMATIONS.DURATION_FAST} ${ANIMATIONS.EASING_STANDARD};

  &[data-dragging='true'] {
    border-color: ${COLORS.PRIMARY};
    background-color: color-mix(
      in srgb,
      ${COLORS.PRIMARY} ${OPACITIES.INTERACTION_SUBTLE_HOVER},
      ${COLORS.SURFACE_PRIMARY}
    );
  }

  &[data-invalid='true'] {
    border-color: ${COLORS.ERROR};
  }

  &:has(input:focus-visible) {
    outline: ${FOCUS_RINGS.WIDTH} solid ${COLORS.FOCUS_RING};
    outline-offset: ${FOCUS_RINGS.OFFSET};
  }

  &:has(input:disabled) {
    border-color: ${COLORS.BORDER_DEFAULT};
    color: ${COLORS.TEXT_DISABLED};
    background-color: ${COLORS.DISABLED_BACKGROUND};
    cursor: not-allowed;
  }

  @media (hover: hover) {
    &:hover:not(:has(input:disabled)) {
      border-color: ${COLORS.TEXT_PRIMARY};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* The native input keeps the picker, the keyboard, and form submission; the area draws it. */
export const FileUploadInput = styled.input.attrs({ className: 'faber-ui-file-upload-input' })`
  position: absolute;
  width: ${BORDER_WIDTHS.DEFAULT};
  height: ${BORDER_WIDTHS.DEFAULT};
  margin: ${SPACINGS.NONE};
  opacity: ${OPACITIES.HIDDEN};
  pointer-events: none;
`;

export const FileUploadLabel = styled(Text.Span).attrs({
  className: 'faber-ui-file-upload-label',
})``;

export const FileUploadDescription = styled(Text.Span).attrs({
  className: 'faber-ui-file-upload-description',
})``;

export const FileUploadList = styled(List).attrs({
  className: 'faber-ui-file-upload-list',
  marker: LIST_MARKERS.NONE,
})`
  gap: ${SPACINGS.XXS};
  margin: ${SPACINGS.NONE};
  padding: ${SPACINGS.NONE};
`;

export const FileUploadItem = styled(ListItem).attrs({ className: 'faber-ui-file-upload-item' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${SPACINGS.SM};
  padding: ${SPACINGS.XXS} ${SPACINGS.XXS} ${SPACINGS.XXS} ${SPACINGS.SM};
  border: ${BORDER_WIDTHS.DEFAULT} solid ${COLORS.BORDER_DEFAULT};
  border-radius: ${RADII.MD};
  background-color: ${COLORS.SURFACE_PRIMARY};
`;

export const FileUploadItemText = styled(HFlex).attrs({
  className: 'faber-ui-file-upload-item-text',
})`
  flex: 1;
  align-items: baseline;
  gap: ${SPACINGS.XS};
  min-width: ${SPACINGS.NONE};
`;

export const FileUploadRemove = styled(Button).attrs({
  className: 'faber-ui-file-upload-remove',
})`
  flex: none;
`;
