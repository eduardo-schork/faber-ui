import { COLORS, FONT_FAMILIES, LINE_HEIGHTS, SPACINGS } from '@faber-ui/tokens';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    text-size-adjust: 100%;
  }

  body {
    min-height: 100%;
    margin: ${SPACINGS.NONE};
    color: ${COLORS.TEXT_PRIMARY};
    background-color: ${COLORS.BACKGROUND_PRIMARY};
    font-family: ${FONT_FAMILIES.BASE};
    line-height: ${LINE_HEIGHTS.NORMAL};
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    font: inherit;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto;
      transition: none;
      animation: none;
    }
  }
`;
